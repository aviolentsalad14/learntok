const API = '/api'

export async function fetchCards({ category, tag, search, limit = 50, offset = 0 } = {}) {
  const params = new URLSearchParams({ limit, offset })
  if (category) params.set('category', category)
  if (tag) params.set('tag', tag)
  if (search) params.set('search', search)

  const res = await fetch(`${API}/cards?${params}`)
  return res.json()
}

export async function fetchCard(id) {
  const res = await fetch(`${API}/cards/${id}`)
  if (!res.ok) throw new Error('Card not found')
  return res.json()
}

export async function fetchCategories() {
  const res = await fetch(`${API}/categories`)
  return res.json()
}

export async function fetchTags() {
  const res = await fetch(`${API}/tags`)
  return res.json()
}

export async function createCard(cardData) {
  const res = await fetch(`${API}/cards`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cardData),
  })
  if (!res.ok) throw new Error('Failed to create card')
  return res.json()
}
