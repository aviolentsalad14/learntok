import { useState, useMemo } from 'react'
import allCards from '../data/cards.json'
import { useSwipe } from '../hooks/useSwipe'
import LearnCard from './LearnCard'
import CategoryFilter from './CategoryFilter'
import ProgressBar from './ProgressBar'

const categories = [...new Set(allCards.map(c => c.category))]
const allTags = [...new Set(allCards.flatMap(c => c.tags))].sort()

export default function Feed() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeTag, setActiveTag] = useState(null)

  const filteredCards = useMemo(() => {
    let cards = allCards
    if (activeCategory) cards = cards.filter(c => c.category === activeCategory)
    if (activeTag) cards = cards.filter(c => c.tags.includes(activeTag))
    return cards
  }, [activeCategory, activeTag])

  const {
    current,
    currentIndex,
    total,
    direction,
    progress,
    bookmarks,
    likes,
    goNext,
    goPrev,
    toggleBookmark,
    toggleLike,
    handleTouchStart,
    handleTouchEnd,
    handleKeyDown,
  } = useSwipe(filteredCards)

  if (!current) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center px-6">
          <p className="text-xl mb-4">No matching cards</p>
          <button
            onClick={() => { setActiveCategory(null); setActiveTag(null) }}
            className="px-6 py-2 bg-white/10 rounded-full"
          >
            Clear filters
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      className="h-screen w-screen bg-gray-900 text-white overflow-hidden relative flex flex-col"
      onKeyDown={handleKeyDown}
    >
      {/* Top bar */}
      <div className="relative z-20 pt-safe">
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-lg font-bold tracking-tight">LearnTok</h1>
          <span className="text-sm text-white/50">
            {currentIndex + 1} / {total}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <ProgressBar progress={progress} />

      {/* Category filter */}
      <CategoryFilter
        categories={categories}
        active={activeCategory}
        onSelect={setActiveCategory}
        onClear={() => setActiveCategory(null)}
      />

      {/* Tag filter (scrollable chips) */}
      <div className="flex gap-1.5 overflow-x-auto px-4 pb-1 scrollbar-hide">
        {activeTag && (
          <button
            onClick={() => setActiveTag(null)}
            className="shrink-0 px-2.5 py-1 rounded-full bg-white/20 text-white text-[11px] font-medium"
          >
            ✕ {activeTag}
          </button>
        )}
        {allTags.filter(t => t !== activeTag).map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
              activeTag === tag
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/50 hover:bg-white/15'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Card area */}
      <div className="flex-1 relative overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-250 ease-out"
          style={{
            transform: direction === 'down'
              ? 'translateY(-100%)'
              : direction === 'up'
              ? 'translateY(100%)'
              : 'translateY(0)',
            opacity: direction ? 0 : 1,
          }}
        >
          <LearnCard
            card={current}
            onBookmark={toggleBookmark}
            onLike={toggleLike}
            isBookmarked={bookmarks.has(current.id)}
            isLiked={likes.has(current.id)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onKeyDown={handleKeyDown}
            canGoPrev={currentIndex > 0}
          />
        </div>
      </div>
    </div>
  )
}
