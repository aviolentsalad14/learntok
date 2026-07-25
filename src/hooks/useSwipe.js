import { useState, useCallback, useRef, useEffect, useMemo } from 'react'

export function useSwipe(cards) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [offsetY, setOffsetY] = useState(0)
  const [account, setAccount] = useState(() => localStorage.getItem('learntok_account') || null)
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('learntok_bookmarks')
    return saved ? new Set(JSON.parse(saved)) : new Set()
  })
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem('learntok_likes')
    return saved ? new Set(JSON.parse(saved)) : new Set()
  })
  const [userCards, setUserCards] = useState(() => {
    const saved = localStorage.getItem('learntok_usercards')
    return saved ? JSON.parse(saved) : []
  })
  const [shuffled, setShuffled] = useState(false)

  // Combined cards (built-in + user-contributed)
  const allCards = useMemo(() => [...cards, ...userCards], [cards, userCards])

  // Shuffle the cards when toggled
  const cardOrder = useMemo(() => {
    if (!shuffled) return allCards
    const arr = [...allCards]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }, [allCards, shuffled])

  // Reset index when cards change
  useEffect(() => {
    setCurrentIndex(0)
  }, [cardOrder.length])

  const dragging = useRef(false)
  const startY = useRef(0)
  const currentOffset = useRef(0)
  const velocity = useRef(0)
  const lastMoveTime = useRef(0)
  const lastMoveY = useRef(0)

  useEffect(() => { localStorage.setItem('learntok_bookmarks', JSON.stringify([...bookmarks])) }, [bookmarks])
  useEffect(() => { localStorage.setItem('learntok_likes', JSON.stringify([...likes])) }, [likes])
  useEffect(() => { localStorage.setItem('learntok_usercards', JSON.stringify(userCards)) }, [userCards])

  const current = cardOrder[currentIndex] || null
  const progress = cardOrder.length > 0 ? ((currentIndex + 1) / cardOrder.length) * 100 : 0

  const goTo = useCallback((index) => {
    if (animating) return
    if (index < 0 || index >= cardOrder.length) return
    const dir = index > currentIndex ? 'down' : 'up'
    setAnimating(true)
    setOffsetY(dir === 'down' ? -100 : 100)
    setTimeout(() => {
      setCurrentIndex(index)
      setOffsetY(0)
      setAnimating(false)
    }, 200)
  }, [animating, cardOrder.length, currentIndex])

  const goNext = useCallback(() => goTo(currentIndex + 1), [goTo, currentIndex])
  const goPrev = useCallback(() => goTo(currentIndex - 1), [goTo, currentIndex])

  const goToId = useCallback((id) => {
    const idx = cardOrder.findIndex(c => c.id === id)
    if (idx >= 0) goTo(idx)
  }, [cardOrder, goTo])

  const toggleShuffle = useCallback(() => setShuffled(s => !s), [])

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

  const addUserCard = useCallback((card) => {
    setUserCards(prev => [...prev, card])
  }, [])

  const handleTouchStart = useCallback((e) => {
    dragging.current = true
    startY.current = e.touches[0].clientY
    currentOffset.current = offsetY
    velocity.current = 0
    lastMoveTime.current = Date.now()
    lastMoveY.current = e.touches[0].clientY
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
    const resisted = Math.sign(delta) * (Math.abs(delta) * 0.4)
    setOffsetY(currentOffset.current + resisted)
  }, [currentOffset])

  const handleTouchEnd = useCallback(() => {
    if (!dragging.current) return
    dragging.current = false
    const absVelocity = Math.abs(velocity.current)
    const absOffset = Math.abs(offsetY)
    if (absOffset > 60 || absVelocity > 0.5) {
      if (offsetY < 0 && currentIndex < cardOrder.length - 1) goNext()
      else if (offsetY > 0 && currentIndex > 0) goPrev()
      else { setOffsetY(0) }
    } else { setOffsetY(0) }
  }, [offsetY, currentIndex, cardOrder.length, goNext, goPrev])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goNext()
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') goPrev()
  }, [goNext, goPrev])

  return {
    current,
    currentIndex,
    total: cardOrder.length,
    offsetY,
    animating,
    progress,
    account,
    bookmarks,
    likes,
    cardOrder,
    goNext,
    goPrev,
    goTo,
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
  }
}
