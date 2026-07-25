import { useState, useMemo, useEffect } from 'react'
import allCards from '../data/cards.json'
import { useSwipe } from '../hooks/useSwipe'
import LearnCard from './LearnCard'
import CategoryFilter from './CategoryFilter'
import ProgressBar from './ProgressBar'
import AccountPrompt from './AccountPrompt'
import SavedCards from './SavedCards'
import SearchPage from './SearchPage'
import SubmitCard from './SubmitCard'

const categories = [...new Set(allCards.map(c => c.category))]
const allTagsList = [...new Set(allCards.flatMap(c => c.tags))].sort()

export default function Feed() {
  const [tab, setTab] = useState('feed')
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
    goToId,
    toggleBookmark,
    toggleLike,
    setAccountName,
    addUserCard,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleKeyDown,
  } = useSwipe(allCards)

  // No account -> splash
  if (!account) return <AccountPrompt onSetName={setAccountName} />

  // Filter
  const filteredCards = useMemo(() => {
    let cards = allCards
    if (activeCategory) cards = cards.filter(c => c.category === activeCategory)
    if (activeTag) cards = cards.filter(c => c.tags.includes(activeTag))
    return cards
  }, [activeCategory, activeTag])

  const noMatch = current === null

  // Navigate to card from bookmarks/search
  const handleCardClick = (id) => {
    goToId(id)
    setTab('feed')
  }

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex flex-col overflow-hidden">
      {/* Tab content */}
      <div className="flex-1 overflow-hidden relative">
        {tab === 'feed' && (
          <div
            className="h-full flex flex-col"
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
            <ProgressBar progress={progress} />

            {/* Category + Tag filters */}
            <CategoryFilter
              categories={categories}
              active={activeCategory}
              onSelect={setActiveCategory}
              onClear={() => setActiveCategory(null)}
            />
            <div className="flex gap-1.5 overflow-x-auto px-4 pb-1 scrollbar-hide">
              {activeTag && (
                <button onClick={() => setActiveTag(null)}
                  className="shrink-0 px-2.5 py-1 rounded-full bg-white/20 text-white text-[11px] font-medium"
                >
                  ✕ {activeTag}
                </button>
              )}
              {allTagsList.filter(t => t !== activeTag).map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                    activeTag === tag ? 'bg-white/20 text-white' : 'bg-white/10 text-white/50 hover:bg-white/15'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>

            {/* Card */}
            <div className="flex-1 relative overflow-hidden">
              {noMatch ? (
                <div className="h-full flex items-center justify-center px-6">
                  <div className="text-center">
                    <p className="text-xl text-white/70 mb-4">No matching cards</p>
                    <button onClick={() => { setActiveCategory(null); setActiveTag(null) }}
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

            {/* Dot indicator */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 max-w-[80vw] overflow-x-auto px-4">
              {allCards.slice(0, Math.min(allCards.length, 50)).map((_, i) => (
                <div
                  key={i}
                  className={`shrink-0 rounded-full transition-all ${
                    i === currentIndex
                      ? 'w-2.5 h-2.5 bg-white/70'
                      : Math.abs(i - currentIndex) < 10
                        ? 'w-1.5 h-1.5 bg-white/20'
                        : 'w-0 h-0 opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {tab === 'saved' && (
          <SavedCards bookmarks={bookmarks} likes={likes} onCardClick={handleCardClick} />
        )}
        {tab === 'search' && (
          <SearchPage onCardClick={handleCardClick} />
        )}
        {tab === 'submit' && (
          <SubmitCard onSubmit={addUserCard} />
        )}
      </div>

      {/* Bottom nav */}
      <nav className="flex items-center justify-around px-4 py-2 bg-gray-900/90 backdrop-blur-md border-t border-white/5 z-30">
        {[
          { key: 'feed', label: 'Feed', icon: '🏠' },
          { key: 'search', label: 'Search', icon: '🔍' },
          { key: 'saved', label: 'Saved', icon: '🔖' },
          { key: 'submit', label: 'Add', icon: '✏️' },
        ].map(item => (
          <button
            key={item.key}
            onClick={() => setTab(item.key)}
            className={`flex flex-col items-center gap-0.5 px-4 py-1 transition-all ${
              tab === item.key ? 'text-white' : 'text-white/30'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
