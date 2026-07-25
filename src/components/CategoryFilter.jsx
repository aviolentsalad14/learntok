import { useState } from 'react'

export default function CategoryFilter({ categories, active, onSelect, onClear }) {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
      <button
        onClick={onClear}
        className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
          !active
            ? 'bg-white/20 text-white shadow'
            : 'bg-white/10 text-white/60 hover:bg-white/15'
        }`}
      >
        All
      </button>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            active === cat
              ? 'bg-white/20 text-white shadow'
              : 'bg-white/10 text-white/60 hover:bg-white/15'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
