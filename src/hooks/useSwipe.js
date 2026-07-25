import { useState, useCallback, useRef, useEffect } from 'react'

export function useSwipe(cards) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [offsetY, setOffsetY] = useState(0)
  const [account, setAccount] = useState(() => {
    const saved = localStorage.getItem('learntok_account')
    return saved || null
  })
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('learntok_bookmarks')
    return saved ? new Set(JSON.parse(saved)) : new Set()
  })
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem('learntok_likes')
    return saved ? new Set(JSON.parse(saved)) : new Set()
  })

  const dragging = useRef(false)
  const startY = useRef(0)
  const currentOffset = useRef(0)
  const velocity = useRef(0)
  const lastMoveTime = useRef(0)
  const lastMoveY = useRef(0)
  const rafId = useRef(null)

  // Persist bookmarks + likes
  useEffect(() => {
    localStorage.setItem('learntok_bookmarks', JSON.stringify([...bookmarks]))
  }, [bookmarks])

  useEffect(() => {
    localStorage.setItem('learntok_likes', JSON.stringify([...likes]))
  }, [likes])

  const current = cards[currentIndex] || null
  const progress = cards.length > 0 ? ((currentIndex + 1) / cards.length) * 100 : 0

  const goTo = useCallback((index, direction) => {
    if (animating) return
    if (index < 0 || index >= cards.length) return
    setAnimating(true)
    if (direction === 'down') setOffsetY(-100)
    else setOffsetY(100)
    setTimeout(() => {
      setCurrentIndex(index)
      setOffsetY(0)
      setAnimating(false)
    }, 200)
  }, [animating, cards.length])

  const goNext = useCallback(() => goTo(currentIndex + 1, 'down'), [goTo, currentIndex])
  const goPrev = useCallback(() => goTo(currentIndex - 1, 'up'), [goTo, currentIndex])

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

  const setAccountName = useCallback((name) => {
    setAccount(name)
    localStorage.setItem('learntok_account', name)
  }, [])

  // Touch drag handling
  const handleTouchStart = useCallback((e) => {
    dragging.current = true
    startY.current = e.touches[0].clientY
    currentOffset.current = offsetY
    velocity.current = 0
    lastMoveTime.current = Date.now()
    lastMoveY.current = e.touches[0].clientY
    cancelAnimationFrame(rafId.current)
  }, [offsetY])

  const handleTouchMove = useCallback((e) => {
    if (!dragging.current) return
    const now = Date.now()
    const y = e.touches[0].clientY
    const dt = now - lastMoveTime.current
    const dy = y - lastMoveY.current

    if (dt > 0) velocity.current = dy / dt * 0.3 + velocity.current * 0.7

    lastMoveTime.current = now
    lastMoveY.current = y

    const delta = y - startY.current
    // Add resistance — harder to drag the further you go
    const resisted = Math.sign(delta) * (Math.abs(delta) * 0.4)
    setOffsetY(currentOffset.current + resisted)
  }, [currentOffset])

  const handleTouchEnd = useCallback((e) => {
    if (!dragging.current) return
    dragging.current = false

    const absVelocity = Math.abs(velocity.current)
    const absOffset = Math.abs(offsetY)

    // Swipe threshold: 60px drag OR fast flick
    if (absOffset > 60 || absVelocity > 0.5) {
      if (offsetY < 0 && currentIndex < cards.length - 1) {
        goTo(currentIndex + 1, 'down')
      } else if (offsetY > 0 && currentIndex > 0) {
        goTo(currentIndex - 1, 'up')
      } else {
        // Bounce back
        setOffsetY(0)
        setCurrentIndex(currentIndex)
      }
    } else {
      // Snap back
      setOffsetY(0)
    }
  }, [offsetY, currentIndex, cards.length, goTo])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goNext()
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') goPrev()
  }, [goNext, goPrev])

  return {
    current,
    currentIndex,
    total: cards.length,
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
  }
}
