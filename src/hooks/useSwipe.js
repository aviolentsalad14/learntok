import { useState, useCallback, useRef } from 'react'

export function useSwipe(cards) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(null)
  const [bookmarks, setBookmarks] = useState(new Set())
  const [likes, setLikes] = useState(new Set())
  const touchStart = useRef(null)
  const touchEnd = useRef(null)

  const current = cards[currentIndex] || null
  const progress = cards.length > 0 ? ((currentIndex + 1) / cards.length) * 100 : 0

  const goNext = useCallback(() => {
    if (currentIndex < cards.length - 1) {
      setDirection('down')
      setTimeout(() => {
        setCurrentIndex(i => i + 1)
        setDirection(null)
      }, 250)
    }
  }, [currentIndex, cards.length])

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection('up')
      setTimeout(() => {
        setCurrentIndex(i => i - 1)
        setDirection(null)
      }, 250)
    }
  }, [currentIndex])

  const toggleBookmark = useCallback((id) => {
    setBookmarks(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const toggleLike = useCallback((id) => {
    setLikes(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const handleTouchStart = useCallback((e) => {
    touchStart.current = e.touches[0].clientY
  }, [])

  const handleTouchEnd = useCallback((e) => {
    touchEnd.current = e.changedTouches[0].clientY
    const diff = touchStart.current - touchEnd.current
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext()
      else if (currentIndex > 0) goPrev()
    }
  }, [goNext, goPrev, currentIndex])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goNext()
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') goPrev()
  }, [goNext, goPrev])

  return {
    current,
    currentIndex,
    total: cards.length,
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
  }
}
