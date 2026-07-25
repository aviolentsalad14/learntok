import { useState } from 'react'
import cards from '../data/cards.json'

export default function SearchPage({ onCardClick }) {
  const [query, setQuery] = useState('')

  const results = query.trim()
    ? cards.filter(c =>
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.summary.toLowerCase().includes(query.toLowerCase()) ||
        c.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
        c.source.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <div className="h-full flex flex-col bg-gray-900">
      {/* Search bar */}
      <div className="px-4 pt-2 pb-1">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search cards..."
          className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:border-white/30 transition-all text-base"
          autoFocus
        />
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {query.trim() === '' && (
          <div className="text-center text-white/30 mt-20">
            <p className="text-4xl mb-2">🔍</p>
            <p>Search by title, tag, source, or content</p>
          </div>
        )}
        {query.trim() !== '' && results.length === 0 && (
          <div className="text-center text-white/40 mt-20">
            <p className="text-lg">No results for "{query}"</p>
          </div>
        )}
        {results.map(card => (
          <button
            key={card.id}
            onClick={() => onCardClick(card.id)}
            className={`w-full text-left p-4 rounded-xl bg-gradient-to-r ${card.color} transition-all active:scale-[0.98]`}
          >
            <div className="flex items-start gap-3">
              <div>
                <span className="text-[11px] text-white/70 bg-white/10 px-2 py-0.5 rounded-full">{card.category}</span>
                <h3 className="text-white font-semibold text-base mt-1">{card.title}</h3>
                <p className="text-white/60 text-xs mt-1 line-clamp-2">{card.summary}</p>
                <div className="flex gap-1.5 mt-2">
                  {card.tags.map(t => (
                    <span key={t} className="text-[10px] text-white/50 bg-white/10 px-1.5 py-0.5 rounded-full">#{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
