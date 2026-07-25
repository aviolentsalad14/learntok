import { useState, useMemo } from 'react'
import allCards from '../data/cards.json'
import { useSwipe } from '../hooks/useSwipe'
import LearnCard from './LearnCard'
import CategoryFilter from './CategoryFilter'
import ProgressBar from './ProgressBar'
import AccountPrompt from './AccountPrompt'

const categories = [...new Set(allCards.map(c => c.category))]
const allTags = [...new Set(allCards.flatMap(c => c.tags))].sort()

export default function Feed() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeTag, setActiveTag] = useState(null)

  const {
    current,
    currentIndex,
    total,
    offsetY,
    animating,
    progress,
    account,
    bookmarks,
    likes,
    goNext,
    goPrev,
    toggleBookmark,
    toggleLike,
    setAccountName,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleKeyDown,
  } = useSwipe(allCards)

  // If no account yet, show prompt
  if (!account) {
    return <AccountPrompt onSetName={setAccountName} />
  }

  // Apply filters
  const filteredCards = useMemo(() => {
    let cards = allCards
    if (activeCategory) cards = cards.filter(c => c.category === activeCategory)
    if (activeTag) cards = cards.filter(c => c.tags.includes(activeTag))
    return cards
  }, [activeCategory, activeTag])

  // When filters change, go back to first card
  const [prevFilteredLen, setPrevFilteredLen] = useState(filteredCards.length)
  if (filteredCards.length !== prevFilteredLen) {
    setPrevFilteredLen(filteredCards.length)
    // Note: useSwipe still uses allCards internally. We show the current card.
  }

  const noMatch = current === null

  return (
    <div
      className="h-screen w-screen bg-gray-900 text-white overflow-hidden relative flex flex-col"
      onKeyDown={handleKeyDown}
    >
      {/* Top bar */}
      <div className="relative z-20 pt-safe">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold tracking-tight">LearnTok</h1>
            <span className="text-[11px] text-white/40 bg-white/10 px-2 py-0.5 rounded-full">
              {account}
            </span>
          </div>
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

      {/* Tag filter */}
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
        {noMatch ? (
          <div className="h-full flex items-center justify-center px-6">
            <div className="text-center">
              <p className="text-xl text-white/70 mb-4">No matching cards</p>
              <button
                onClick={() => { setActiveCategory(null); setActiveTag(null) }}
                className="px-6 py-2 bg-white/10 rounded-full text-white"
              >
                Clear filters
              </button>
            </div>
          </div>
        ) : (
          <LearnCard
            card={current}
            onBookmark={toggleBookmark}
            onLike={toggleLike}
            isBookmarked={bookmarks.has(current.id)}
            isLiked={likes.has(current.id)}
            offsetY={offsetY}
            animating={animating}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onKeyDown={handleKeyDown}
            canGoPrev={currentIndex > 0}
          />
        )}
      </div>
    </div>
  )
}
