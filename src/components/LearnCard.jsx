import { useState } from 'react'

export default function LearnCard({ card, onBookmark, onLike, isBookmarked, isLiked, onSwipeNext, onSwipePrev, onTouchStart, onTouchEnd, onKeyDown, canGoPrev }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="relative w-full h-full flex flex-col justify-end overflow-hidden select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${card.color}`} />

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5" />

      {/* Content */}
      <div className="relative z-10 px-6 pb-24 pt-32 flex flex-col justify-end">
        {/* Category badge */}
        <span className="self-start px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-4 backdrop-blur-sm">
          {card.category}
        </span>

        {/* Title */}
        <h1 className="text-2xl font-bold text-white leading-tight mb-3">
          {card.title}
        </h1>

        {/* Summary */}
        <div className="mb-4">
          <p className={`text-white/90 text-base leading-relaxed transition-all ${expanded ? '' : 'line-clamp-5'}`}>
            {card.summary}
          </p>
          {card.summary.length > 150 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-white/70 text-sm mt-1 hover:text-white"
            >
              {expanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>

        {/* Source */}
        <p className="text-white/50 text-xs italic">
          — {card.source}
        </p>
      </div>

      {/* Action buttons */}
      <div className="absolute right-4 bottom-32 z-20 flex flex-col gap-5">
        <button
          onClick={() => onBookmark(card.id)}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:bg-white/20 active:scale-90"
        >
          {isBookmarked ? '🔖' : '📑'}
        </button>
        <button
          onClick={() => onLike(card.id)}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:bg-white/20 active:scale-90"
        >
          {isLiked ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Swipe indicators */}
      {canGoPrev && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 text-white/30 text-sm">
          ▲ Swipe up for previous
        </div>
      )}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/30 text-sm">
        Swipe down for next ▼
      </div>
    </div>
  )
}
