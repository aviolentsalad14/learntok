import { useState, useMemo } from 'react'
import allCards from '../data/cards.json'
import { useSwipe } from '../hooks/useSwipe'
import LearnCard from './LearnCard'
import CategoryFilter from './CategoryFilter'
import ProgressBar from './ProgressBar'

const categories = [...new Set(allCards.map(c => c.category))]

export default function Feed() {
  const [activeCategory, setActiveCategory] = useState(null)

  const filteredCards = useMemo(() => {
    if (!activeCategory) return allCards
    return allCards.filter(c => c.category === activeCategory)
  }, [activeCategory])

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
        <div className="text-center">
          <p className="text-xl mb-4">No cards yet</p>
          <button
            onClick={() => setActiveCategory(null)}
            className="px-6 py-2 bg-white/10 rounded-full"
          >
            Show all
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

      {/* Categories */}
      <CategoryFilter
        categories={categories}
        active={activeCategory}
        onSelect={setActiveCategory}
        onClear={() => setActiveCategory(null)}
      />

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
            onSwipeNext={goNext}
            onSwipePrev={goPrev}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onKeyDown={handleKeyDown}
            canGoPrev={currentIndex > 0}
          />
        </div>
      </div>

      {/* Bottom tap zones for keyboard-free swiping */}
      <div className="absolute inset-x-0 top-1/2 z-30 flex justify-between pointer-events-none">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="pointer-events-auto w-16 h-16 flex items-center justify-center text-white/30 hover:text-white/70 disabled:opacity-0 transition-all"
        >
          ◀
        </button>
        <button
          onClick={goNext}
          className="pointer-events-auto w-16 h-16 flex items-center justify-center text-white/30 hover:text-white/70 transition-all"
        >
          ▶
        </button>
      </div>
    </div>
  )
}
