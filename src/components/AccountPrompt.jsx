import { useState } from 'react'

export default function AccountPrompt({ onSetName }) {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) onSetName(name.trim())
  }

  return (
    <div className="h-screen w-screen bg-gray-900 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-white text-center mb-2">LearnTok</h1>
        <p className="text-white/50 text-center text-sm mb-8">
          micro-learning, swipe by swipe
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white/60 text-xs uppercase tracking-wider block mb-2">
              Pick a username
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. curious_bob"
              maxLength={24}
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:border-white/30 transition-all text-base"
              autoFocus
            />
          </div>
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full py-3 rounded-xl bg-white text-gray-900 font-semibold disabled:opacity-30 transition-all text-base"
          >
            Start Learning
          </button>
        </form>
      </div>
    </div>
  )
}
