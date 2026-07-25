import initSqlJs from 'sql.js'
import express from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DB_PATH = path.join(__dirname, 'learntok.db')
const PORT = process.env.PORT || 3001

let db

async function start() {
  const SQL = await initSqlJs()

  if (!fs.existsSync(DB_PATH)) {
    console.error('Database not found. Run: node server/seed.mjs')
    process.exit(1)
  }

  const buffer = fs.readFileSync(DB_PATH)
  db = new SQL.Database(buffer)

  const app = express()
  app.use(cors())
  app.use(express.json())

  // GET /api/cards — list with optional filters
  app.get('/api/cards', (req, res) => {
    const { category, tag, search, age, limit = 50, offset = 0 } = req.query

    // Build WHERE clause
    const whereParts = []
    const params = []

    if (category) {
      whereParts.push('category = ?')
      params.push(category)
    }
    if (age) {
      whereParts.push('age = ?')
      params.push(age)
    }
    if (tag) {
      whereParts.push("(SELECT 1 FROM json_each(tags) WHERE value = ?) = 1")
      params.push(tag)
    }
    if (search) {
      const term = `%${search}%`
      whereParts.push("(title LIKE ? OR summary LIKE ? OR source LIKE ? OR (SELECT 1 FROM json_each(tags) WHERE value LIKE ?) = 1)")
      params.push(term, term, term, term)
    }

    const whereClause = whereParts.length ? ' AND ' + whereParts.join(' AND ') : ''

    // Count query (with filters)
    const countResult = db.exec(`SELECT COUNT(*) as total FROM cards WHERE 1=1 ${whereClause}`, params)
    const total = countResult[0]?.values[0]?.[0] || 0

    // Data query (with filters + pagination)
    const dataSql = `SELECT * FROM cards WHERE 1=1 ${whereClause} ORDER BY id ASC LIMIT ? OFFSET ?`
    const dataParams = [...params, parseInt(limit), parseInt(offset)]
    const rows = db.exec(dataSql, dataParams)

    const cards = rows[0]?.values.map(row => {
      const cols = rows[0].columns
      const card = {}
      cols.forEach((col, i) => {
        card[col] = row[i]
        if (col === 'tags') card[col] = JSON.parse(row[i])
      })
      return card
    }) || []

    res.json({ cards, total, limit: parseInt(limit), offset: parseInt(offset) })
  })

  // GET /api/cards/:id — single card
  app.get('/api/cards/:id', (req, res) => {
    const rows = db.exec('SELECT * FROM cards WHERE id = ?', [parseInt(req.params.id)])
    if (!rows[0]?.values?.length) return res.status(404).json({ error: 'Card not found' })

    const cols = rows[0].columns
    const card = {}
    cols.forEach((col, i) => {
      card[col] = rows[0].values[0][i]
      if (col === 'tags') card[col] = JSON.parse(card[col])
    })
    res.json(card)
  })

  // POST /api/cards — add a new card
  app.post('/api/cards', (req, res) => {
    const { category, title, summary, source, color, age, tags, videoId } = req.body
    if (!category || !title || !summary) {
      return res.status(400).json({ error: 'category, title, and summary are required' })
    }

    const maxId = db.exec('SELECT COALESCE(MAX(id), 84) + 1 as next_id FROM cards')
    const nextId = maxId[0]?.values[0]?.[0] || 86

    db.run(
      `INSERT INTO cards (id, category, title, summary, source, color, age, tags, videoId, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`,
      [nextId, category, title, summary, source || '', color || 'from-gray-600/80 to-slate-800/80', age || '14+', JSON.stringify(tags || []), videoId || null]
    )

    // Persist the db to disk
    const buffer = Buffer.from(db.export())
    fs.writeFileSync(DB_PATH, buffer)

    res.status(201).json({ id: nextId, message: 'Card created' })
  })

  // GET /api/categories — distinct categories
  app.get('/api/categories', (req, res) => {
    const result = db.exec('SELECT DISTINCT category FROM cards ORDER BY category')
    const categories = result[0]?.values.map(r => r[0]) || []
    res.json(categories)
  })

  // GET /api/tags — all unique tags
  app.get('/api/tags', (req, res) => {
    const result = db.exec('SELECT tags FROM cards')
    const allTags = new Set()
    result[0]?.values.forEach(r => {
      try { JSON.parse(r[0]).forEach(t => allTags.add(t)) } catch {}
    })
    res.json([...allTags].sort())
  })

  app.listen(PORT, () => {
    console.log(`LearnTok API running on http://localhost:${PORT}`)
  })
}

start().catch(console.error)
