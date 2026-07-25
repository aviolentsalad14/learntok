const Database = require('better-sqlite3')
const path = require('path')
const fs = require('fs')

const DB_PATH = path.join(__dirname, 'learntok.db')
const CARDS_JSON = path.join(__dirname, '..', 'src', 'data', 'cards.json')

// Delete existing db to start fresh
if (fs.existsSync(DB_PATH)) fs.unlinkSync(DB_PATH)

const db = new Database(DB_PATH)

// Enable WAL mode for better concurrency
db.pragma('journal_mode = WAL')

// Create schema
db.exec(`
  CREATE TABLE cards (
    id INTEGER PRIMARY KEY,
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    source TEXT NOT NULL DEFAULT '',
    color TEXT NOT NULL,
    age TEXT NOT NULL DEFAULT '14+',
    tags TEXT NOT NULL DEFAULT '[]',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE INDEX idx_cards_category ON cards(category);
  CREATE INDEX idx_cards_title ON cards(title);
  CREATE INDEX idx_cards_source ON cards(source);
`)

// Insert function
const insert = db.prepare(`
  INSERT INTO cards (id, category, title, summary, source, color, age, tags)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`)

const insertMany = db.transaction((cards) => {
  for (const card of cards) {
    insert.run(
      card.id,
      card.category,
      card.title,
      card.summary,
      card.source,
      card.color,
      card.age,
      JSON.stringify(card.tags || [])
    )
  }
})

// Load and insert all cards from JSON
const cardsData = JSON.parse(fs.readFileSync(CARDS_JSON, 'utf-8'))
insertMany(cardsData)

console.log(`Seeded database with ${cardsData.length} cards`)

// Verify
const count = db.prepare('SELECT COUNT(*) as count FROM cards').get()
console.log(`DB card count: ${count.count}`)

db.close()
