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
  const [showVideo, setShowVideo] = useState(false)

  const videoThumb = card.videoId
    ? `https://img.youtube.com/vi/${card.videoId}/hqdefault.jpg`
    : null

  return (
    <div className="relative w-full h-full overflow-hidden select-none">
      {/* Animated wrapper */}
      <div
        className={`absolute inset-0 ${animating ? 'transition-transform duration-200 ease-out' : ''}`}
        style={{ transform: `translateY(${offsetY}px)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        {/* Background: gradient or video thumbnail */}
        {card.videoId && !showVideo ? (
          <div className="absolute inset-0 bg-black">
            <img
              src={videoThumb}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            {/* Play button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowVideo(true)
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center active:scale-90 transition-transform z-20"
              aria-label="Play video"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        ) : card.videoId && showVideo ? (
          <div className="absolute inset-0 bg-black flex flex-col">
            <div className="flex-1 relative">
              <iframe
                src={`https://www.youtube.com/embed/${card.videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&playsinline=1`}
                title={card.title}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowVideo(false)
              }}
              className="text-white/60 text-xs py-2 text-center active:text-white"
            >
              Close video
            </button>
          </div>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-b ${card.color}`}>
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5" />
          </div>
        )}

        {/* Content overlay — only show when video is not playing fullscreen */}
        {(!card.videoId || !showVideo) && (
          <div className="absolute inset-x-0 bottom-0 px-5 pb-24 pt-40 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10">
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

            {/* Summary */}
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
            </div>

            {/* Source */}
            <p className="text-white/40 text-[11px] italic">
              — {card.source}
            </p>
          </div>
        )}
      </div>

      {/* Action buttons — always visible */}
      {(!card.videoId || !showVideo) && (
        <div className="absolute right-3 bottom-28 z-20 flex flex-col gap-3.5">
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
      )}

      {/* Swipe hint */}
      {(!card.videoId || !showVideo) && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-white/20 text-[11px] transition-opacity"
          style={{ opacity: offsetY === 0 && !animating ? 0.5 : 0 }}
        >
          Swipe
        </div>
      )}
    </div>
  )
}
