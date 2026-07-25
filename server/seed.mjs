import initSqlJs from 'sql.js'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DB_PATH = path.join(__dirname, 'learntok.db')
const CARDS_JSON = path.join(__dirname, '..', 'src', 'data', 'cards.json')

async function seed() {
  const SQL = await initSqlJs()
  
  if (fs.existsSync(DB_PATH)) fs.unlinkSync(DB_PATH)

  const db = new SQL.Database()

  db.run(`
    CREATE TABLE cards (
      id INTEGER PRIMARY KEY,
      category TEXT NOT NULL,
      title TEXT NOT NULL,
      summary TEXT NOT NULL,
      source TEXT NOT NULL DEFAULT '',
      color TEXT NOT NULL,
      age TEXT NOT NULL DEFAULT '14+',
      tags TEXT NOT NULL DEFAULT '[]',
      videoId TEXT DEFAULT NULL,
      bullets TEXT DEFAULT NULL,
      created_at TEXT NOT NULL
    );
  `)
  db.run(`CREATE INDEX idx_cards_category ON cards(category);`)
  db.run(`CREATE INDEX idx_cards_title ON cards(title);`)

  const insert = db.prepare(`
    INSERT INTO cards (id, category, title, summary, source, color, age, tags, videoId, bullets, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
  `)

  const cardsData = JSON.parse(fs.readFileSync(CARDS_JSON, 'utf-8'))

  for (const card of cardsData) {
    insert.run([card.id, card.category, card.title, card.summary, card.source, card.color, card.age, JSON.stringify(card.tags || []), card.videoId || null, JSON.stringify(card.bullets || null)])
  }

  const buffer = Buffer.from(db.export())
  fs.writeFileSync(DB_PATH, buffer)

  const count = db.exec("SELECT COUNT(*) as count FROM cards")[0].values[0][0]
  const withVideo = db.exec("SELECT COUNT(*) as count FROM cards WHERE videoId IS NOT NULL")[0].values[0][0]
  console.log(`Seeded: ${count} cards (${withVideo} with video)`)
  db.close()
}

seed().catch(console.error)
