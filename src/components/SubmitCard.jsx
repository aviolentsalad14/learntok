import { useState, useRef } from 'react'

const CATEGORIES = ['📚 Book Bite', '🧠 Philosophy', '🔬 Science Snack', '🎤 Talk Snip']

export default function SubmitCard({ onSubmit }) {
  const [form, setForm] = useState({ category: '', title: '', summary: '', source: '', tags: '', age: '' })
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)

  const handleChange = (field, value) => setForm(f => ({ ...f, [field]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title || !form.summary || !form.category) return

    const newCard = {
      id: Date.now(),
      category: form.category,
      title: form.title,
      summary: form.summary,
      source: form.source || 'Contributed',
      tags: form.tags ? form.tags.split(',').map(t => t.trim().toLowerCase()).filter(Boolean) : [],
      age: form.age || '14+',
      color: 'from-gray-600/80 to-slate-800/80',
    }

    onSubmit(newCard)
    setForm({ category: '', title: '', summary: '', source: '', tags: '', age: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <div className="h-full flex flex-col bg-gray-900 overflow-y-auto">
      <div className="px-4 pt-2 pb-6">
        <h2 className="text-white font-semibold text-lg mb-4">Add a Card</h2>

        {submitted && (
          <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-xl mb-4 text-sm">
            ✓ Card added! Swipe to find it.
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
          <select
            value={form.category}
            onChange={(e) => handleChange('category', e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10 focus:outline-none focus:border-white/30 text-base appearance-none"
          >
            <option value="" className="bg-gray-800">Category *</option>
            {CATEGORIES.map(c => (
              <option key={c} value={c} className="bg-gray-800">{c}</option>
            ))}
          </select>

          <input
            type="text"
            value={form.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Title *"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:border-white/30 text-base"
          />

          <textarea
            value={form.summary}
            onChange={(e) => handleChange('summary', e.target.value)}
            placeholder="Summary / content * (2-3 sentences)"
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:border-white/30 text-base resize-none"
          />

          <input
            type="text"
            value={form.source}
            onChange={(e) => handleChange('source', e.target.value)}
            placeholder="Source (e.g. Book Title by Author)"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:border-white/30 text-base"
          />

          <div className="flex gap-3">
            <input
              type="text"
              value={form.tags}
              onChange={(e) => handleChange('tags', e.target.value)}
              placeholder="Tags (comma-sep: physics, science)"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:border-white/30 text-base"
            />
            <select
              value={form.age}
              onChange={(e) => handleChange('age', e.target.value)}
              className="w-20 px-2 py-3 rounded-xl bg-white/10 text-white border border-white/10 focus:outline-none focus:border-white/30 text-base appearance-none"
            >
              <option value="10+" className="bg-gray-800">10+</option>
              <option value="12+" className="bg-gray-800">12+</option>
              <option value="14+" className="bg-gray-800">14+</option>
              <option value="16+" className="bg-gray-800">16+</option>
              <option value="18+" className="bg-gray-800">18+</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-gray-900 font-semibold text-base transition-all active:scale-[0.98]"
          >
            Add Card
          </button>
        </form>
      </div>
    </div>
  )
}
