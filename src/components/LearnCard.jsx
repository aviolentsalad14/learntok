import { useState, useRef } from 'react'

export default function LearnCard({
  card,
  onBookmark,
  onLike,
  isBookmarked,
  isLiked,
  offsetY,
  animating,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onKeyDown,
  canGoPrev,
}) {
  const [expanded, setExpanded] = useState(false)
  const playerRef = useRef(null)

  return (
    <div className="relative w-full h-full flex flex-col justify-end overflow-hidden select-none">
      {/* Animated card */}
      <div
        className={`absolute inset-0 ${animating ? 'transition-transform duration-200 ease-out' : ''}`}
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        {/* Background — gradient OR video thumbnail */}
        <div className={`absolute inset-0 ${card.videoId ? '' : `bg-gradient-to-b ${card.color}`}`}>
          {card.videoId ? (
            <div className="absolute inset-0 bg-black">
              <iframe
                ref={playerRef}
                src={`https://www.youtube.com/embed/${card.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1`}
                title={card.title}
                className="w-full h-full pointer-events-none"
                style={{ border: 0 }}
                allow="autoplay; encrypted-media"
                loading="lazy"
              />
              {/* Dark gradient overlay at bottom for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-b ${card.color}`}>
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5" />
            </div>
          )}
        </div>

        {/* Touch/slide overlay (captures swipe gestures) */}
        <div
          className="absolute inset-0 z-10"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onKeyDown={onKeyDown}
          tabIndex={0}
        />

        {/* Action buttons */}
        <div className="absolute right-4 bottom-28 z-20 flex flex-col gap-4">
          <button
            onClick={(e) => { e.stopPropagation(); onBookmark(card.id) }}
            className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:bg-white/20 active:scale-90 text-lg"
          >
            {isBookmarked ? '🔖' : '📑'}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onLike(card.id) }}
            className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:bg-white/20 active:scale-90 text-lg"
          >
            {isLiked ? '❤️' : '🤍'}
          </button>
        </div>

        {/* Text content overlaid on the video/gradient */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-24">
          {/* Category badge */}
          <span className="self-start inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-3 backdrop-blur-sm">
            {card.category}
          </span>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {card.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-[11px] backdrop-blur-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* Age badge */}
          <span className="inline-block px-2 py-0.5 rounded bg-black/20 text-white/60 text-[11px] mb-3">
            {card.age}
          </span>

          {/* Title */}
          <h1 className="text-2xl font-bold text-white leading-tight mb-2">
            {card.title}
          </h1>

          {/* Summary (collapsible) */}
          <div className="mb-3">
            <p className={`text-white/90 text-base leading-relaxed transition-all ${expanded ? '' : 'line-clamp-3'}`}>
              {card.summary}
            </p>
            {card.summary.length > 150 && (
              <button
                onClick={(e) => { e.stopPropagation(); setExpanded(!expanded) }}
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
      </div>

      {/* Swipe hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/20 text-xs transition-opacity"
        style={{ opacity: offsetY === 0 && !animating ? 0.6 : 0 }}
      >
        Drag up/down
      </div>
    </div>
  )
}
