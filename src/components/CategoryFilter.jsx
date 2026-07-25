export default function CategoryFilter({ categories, active, onSelect, onClear }) {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-2.5 scrollbar-hide border-b border-white/5">
      <button
        onClick={onClear}
        className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
          !active
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/25'
            : 'bg-white/8 text-white/50 hover:bg-white/15 hover:text-white/80 border border-white/10'
        }`}
      >
        All
      </button>
      {categories.map(cat => {
        const isActive = active === cat
        const colors = {
          '📚 Book Bite': 'from-emerald-500 to-teal-500 shadow-emerald-500/25',
          '🧠 Philosophy': 'from-violet-500 to-purple-500 shadow-violet-500/25',
          '🔬 Science Snack': 'from-sky-500 to-cyan-500 shadow-sky-500/25',
          '🎤 Talk Snip': 'from-orange-500 to-rose-500 shadow-orange-500/25',
        }
        const activeStyle = colors[cat] || 'from-gray-500 to-slate-500'

        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              isActive
                ? `bg-gradient-to-r ${activeStyle} text-white shadow-lg`
                : 'bg-white/8 text-white/50 hover:bg-white/15 hover:text-white/80 border border-white/10'
            }`}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}
