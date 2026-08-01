import { useState } from 'react'

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

  const videoThumb = card.videoId
    ? `https://img.youtube.com/vi/${card.videoId}/hqdefault.jpg`
    : null

  return (
    <div className="relative w-full h-full overflow-hidden select-none">
      {/* Animated wrapper with touch handling */}
      <div
        className={`absolute inset-0 ${animating ? 'transition-transform duration-200 ease-out' : ''}`}
        style={{ transform: `translateY(${offsetY}px)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        {/* Background: video thumbnail or gradient */}
        {card.videoId ? (
          <div className="absolute inset-0 bg-black">
            <img
              src={videoThumb}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Dark overlays */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

            {/* Watch button */}
            <a
              href={`https://www.youtube.com/watch?v=${card.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2 active:scale-95 transition-transform"
            >
              <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white/70 text-xs font-medium">Watch on YouTube</span>
            </a>
          </div>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-b ${card.color}`}>
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5" />
          </div>
        )}

        {/* Text content */}
        <div className="absolute inset-x-0 bottom-0 px-5 pb-20 pt-48 z-10">
          {/* Category badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-2.5 backdrop-blur-sm">
            {card.category}
          </span>

          {/* Tags (max 3) */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {card.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-[11px] backdrop-blur-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* Age badge */}
          <span className="inline-block px-2 py-0.5 rounded bg-black/20 text-white/60 text-[11px] mb-2.5">
            {card.age}
          </span>

          {/* Title */}
          <h1 className="text-xl font-bold text-white leading-tight mb-2">
            {card.title}
          </h1>

          {/* Summary + bullets - expandable full view */}
          <div className="mb-2">
            <p className={`text-white/85 text-sm leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
              {card.summary}
            </p>
            {card.summary.length > 150 && (
              <button
                onClick={(e) => { e.stopPropagation(); setExpanded(!expanded) }}
                className="text-white/60 text-xs mt-1 hover:text-white"
              >
                {expanded ? 'Show less' : 'Read more'}
              </button>
            )}

            {/* Key takeaways / all points */}
            {card.bullets && card.bullets.length > 0 && (
              <div className={expanded ? 'mt-3 max-h-[50vh] overflow-y-auto pr-1 scrollbar-hide' : 'mt-2'}>
                <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1.5">All Points / Key Takeaways</p>
                <ul className="space-y-1">
                  {(expanded ? card.bullets : card.bullets.slice(0, 3)).map((b, i) => (
                    <li key={i} className="text-white/80 text-xs leading-relaxed flex gap-1.5">
                      <span className="text-green-400 shrink-0 mt-0.5">&#x2022;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {!expanded && card.bullets.length > 3 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setExpanded(true) }}
                    className="text-white/60 text-xs mt-1.5 hover:text-white"
                  >
                    Show all {card.bullets.length} points
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Source */}
          <p className="text-white/40 text-[11px] italic">
            — {card.source}
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="absolute right-3 bottom-24 z-20 flex flex-col gap-3.5">
        <button
          onClick={(e) => { e.stopPropagation(); onBookmark(card.id) }}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:bg-white/20 active:scale-90 text-base"
        >
          {isBookmarked ? '🔖' : '📑'}
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onLike(card.id) }}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:bg-white/20 active:scale-90 text-base"
        >
          {isLiked ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Swipe hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-white/20 text-[11px] transition-opacity"
        style={{ opacity: offsetY === 0 && !animating ? 0.5 : 0 }}
      >
        Swipe
      </div>
    </div>
  )
}
