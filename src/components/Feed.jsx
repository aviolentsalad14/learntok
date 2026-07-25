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
import { fetchCategories, fetchTags, createCard } from '../api'

const fallbackCategories = [...new Set(allCards.map(c => c.category))]
const fallbackTags = [...new Set(allCards.flatMap(c => c.tags))].sort()

export default function Feed() {
  const [tab, setTab] = useState('feed')
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeTag, setActiveTag] = useState(null)
  const [categories, setCategories] = useState(fallbackCategories)
  const [allTagsList, setAllTagsList] = useState(fallbackTags)
  const [apiStatus, setApiStatus] = useState('loading')

  useEffect(() => {
    Promise.all([
      fetchCategories().catch(() => null),
      fetchTags().catch(() => null),
    ]).then(([cats, tags]) => {
      if (cats && cats.length) { setCategories(cats); setApiStatus('online') }
      else { setApiStatus('offline') }
      if (tags && tags.length) setAllTagsList(tags)
    })
  }, [])

  // Filter cards BEFORE passing to useSwipe
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
    shuffled,
    toggleShuffle,
  } = useSwipe(filteredCards)  // <-- use filteredCards here

  if (!account) return <AccountPrompt onSetName={setAccountName} />

  const handleCardClick = (id) => { goToId(id); setTab('feed') }

  const handleSubmit = async (cardData) => {
    addUserCard(cardData)
    if (apiStatus === 'online') {
      try { await createCard(cardData) }
      catch (e) { console.log('API unavailable, saved locally') }
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex flex-col overflow-hidden">
      {apiStatus === 'loading' && (
        <div className="absolute top-0 left-0 right-0 z-50 bg-yellow-500/20 text-yellow-200 text-[10px] text-center py-0.5">Connecting to backend...</div>
      )}
      {apiStatus === 'offline' && (
        <div className="absolute top-0 left-0 right-0 z-50 bg-red-500/20 text-red-200 text-[10px] text-center py-0.5">Backend offline — using local data</div>
      )}

      <div className="flex-1 overflow-hidden relative">
        {tab === 'feed' && (
          <div className="h-full flex flex-col" onKeyDown={handleKeyDown}>
            <div className="relative z-20 pt-safe">
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-bold tracking-tight">LearnTok</h1>
                  <span className="text-[11px] text-white/40 bg-white/10 px-2 py-0.5 rounded-full">{account}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={toggleShuffle}
                    className={`text-sm transition-all ${shuffled ? 'text-green-400' : 'text-white/50 hover:text-white/80'}`}
                  >
                    {shuffled ? '🔀 On' : '🔀'}
                  </button>
                  <span className="text-sm text-white/50">{currentIndex + 1} / {total}</span>
                </div>
              </div>
            </div>
            <ProgressBar progress={progress} />

            <CategoryFilter
              categories={categories}
              active={activeCategory}
              onSelect={setActiveCategory}
              onClear={() => setActiveCategory(null)}
            />
            <div className="flex gap-1.5 overflow-x-auto px-4 py-1.5 scrollbar-hide border-b border-white/5">
              {activeTag && (
                <button onClick={() => setActiveTag(null)}
                  className="shrink-0 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-500/30 to-pink-500/30 text-red-300 text-[11px] font-semibold border border-red-400/20 flex items-center gap-1"
                >
                  <span>✕</span>
                  <span>{activeTag}</span>
                </button>
              )}
              {allTagsList.filter(t => t !== activeTag).map(tag => (
                <button key={tag} onClick={() => setActiveTag(tag)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 ${
                    activeTag === tag
                      ? 'bg-white/20 text-white shadow-sm'
                      : 'bg-white/8 text-white/45 hover:bg-white/15 hover:text-white/70 border border-white/8'
                  }`}
                >#{tag}</button>
              ))}
            </div>

            <div className="flex-1 relative overflow-hidden touch-none">
              {!current ? (
                <div className="h-full flex items-center justify-center px-6">
                  <div className="text-center">
                    <p className="text-xl text-white/70 mb-4">No matching cards</p>
                    <button onClick={() => { setActiveCategory(null); setActiveTag(null) }}
                      className="px-6 py-2 bg-white/10 rounded-full text-white">Clear filters</button>
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
        )}

        {tab === 'saved' && <SavedCards bookmarks={bookmarks} likes={likes} onCardClick={handleCardClick} />}
        {tab === 'search' && <SearchPage onCardClick={handleCardClick} />}
        {tab === 'submit' && <SubmitCard onSubmit={handleSubmit} />}
      </div>

      <nav className="flex items-center justify-around px-2 pt-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom,0px))] bg-gray-900/95 backdrop-blur-xl border-t border-white/10 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
        {[
          { key: 'feed', label: 'Feed', icon: '🏠', activeIcon: '🏡' },
          { key: 'search', label: 'Search', icon: '🔍', activeIcon: '🔍' },
          { key: 'saved', label: 'Saved', icon: '📑', activeIcon: '🔖' },
          { key: 'submit', label: 'Add', icon: '➕', activeIcon: '✏️' },
        ].map(item => {
          const isActive = tab === item.key
          return (
            <button key={item.key} onClick={() => setTab(item.key)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 min-w-[60px] rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-white bg-white/8'
                  : 'text-white/35 hover:text-white/60'
              }`}
            >
              <span className="text-lg leading-none">{isActive ? item.activeIcon : item.icon}</span>
              <span className={`text-[9px] font-semibold tracking-wide uppercase ${
                isActive ? 'text-white/80' : 'text-white/30'
              }`}>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
