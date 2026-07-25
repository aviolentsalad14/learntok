import { useState } from 'react'
import cards from '../data/cards.json'

export default function SavedCards({ bookmarks, likes, onCardClick }) {
  const [tab, setTab] = useState('bookmarks')

  const bookmarkedCards = cards.filter(c => bookmarks.has(c.id))
  const likedCards = cards.filter(c => likes.has(c.id))

  const list = tab === 'bookmarks' ? bookmarkedCards : likedCards

  return (
    <div className="h-full flex flex-col bg-gray-900">
      {/* Tabs */}
      <div className="flex px-4 pt-2 pb-1 gap-2">
        <button
          onClick={() => setTab('bookmarks')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            tab === 'bookmarks'
              ? 'bg-white/20 text-white'
              : 'text-white/40 hover:text-white/70'
          }`}
        >
          🔖 Bookmarks ({bookmarkedCards.length})
        </button>
        <button
          onClick={() => setTab('likes')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            tab === 'likes'
              ? 'bg-white/20 text-white'
              : 'text-white/40 hover:text-white/70'
          }`}
        >
          ❤️ Liked ({likedCards.length})
        </button>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {list.length === 0 && (
          <div className="text-center text-white/40 mt-20">
            <p className="text-lg">{tab === 'bookmarks' ? 'No bookmarks yet' : 'No likes yet'}</p>
            <p className="text-sm mt-1">Cards you {tab === 'bookmarks' ? 'bookmark' : 'like'} will appear here</p>
          </div>
        )}
        {list.map(card => (
          <button
            key={card.id}
            onClick={() => onCardClick(card.id)}
            className={`w-full text-left p-4 rounded-xl bg-gradient-to-r ${card.color} transition-all active:scale-[0.98]`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 mr-3">
                <span className="text-[11px] text-white/70 bg-white/10 px-2 py-0.5 rounded-full">{card.category}</span>
                <h3 className="text-white font-semibold text-base mt-1">{card.title}</h3>
                <p className="text-white/60 text-xs mt-1 line-clamp-2">{card.summary}</p>
              </div>
              <span className="text-white/40 text-lg shrink-0 mt-1">
                {tab === 'bookmarks' ? '🔖' : '❤️'}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
