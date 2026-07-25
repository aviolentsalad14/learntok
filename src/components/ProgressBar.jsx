export default function ProgressBar({ progress }) {
  return (
    <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-white/10">
      <div
        className="h-full bg-white/60 transition-all duration-300 ease-out rounded-r"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
