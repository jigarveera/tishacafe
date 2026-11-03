import { useEffect, useRef } from 'react'
import { ArrowUpRight, Play } from 'lucide-react'

export default function ReelCard({ reel, active, manual, playbackToken, onEnded }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (active) {
      video.currentTime = 0
      video.play().catch(() => {})
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [active, manual, playbackToken])

  return <article className="relative h-full overflow-hidden rounded-[28px] bg-coffee-900 text-white shadow-[0_18px_45px_rgba(48,39,31,.2)]">
    {reel.videoSrc ? <video ref={videoRef} src={reel.videoSrc} poster={reel.poster} preload={active ? 'auto' : 'metadata'} playsInline muted loop={!manual} onEnded={onEnded} onError={onEnded} className="h-full w-full object-cover" /> : <img src={reel.poster} alt={reel.posterAlt ?? ''} className="h-full w-full object-cover" />}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night-950/80 via-transparent to-night-950/30" />
    <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2"><span className="grid size-9 place-items-center rounded-full border border-white/50 bg-sage-500 font-serif text-xl italic">t</span><span className="text-[10px] font-bold uppercase tracking-[.14em]">{reel.videoSrc ? `Tisha reel ${reel.number}` : 'Instagram preview'}</span></div>
    {!reel.videoSrc && <div className="pointer-events-none absolute bottom-6 left-5 right-5"><span className="mb-3 grid size-11 place-items-center rounded-full border border-white/50 bg-white/20 backdrop-blur-lg"><Play size={18} fill="currentColor" /></span><p className="font-serif text-3xl font-semibold leading-none">Follow the little moments.</p><p className="mt-2 text-xs text-white/80">Real reels will appear here when supplied.</p></div>}
    <a href={reel.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={reel.videoSrc ? `Open Tisha reel ${reel.number} on Instagram` : 'Open Tisha Cafe Instagram'} onClick={(event) => event.stopPropagation()} className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-white/65 bg-coffee-900/70 text-white backdrop-blur-sm transition hover:bg-sage-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ArrowUpRight size={21} /></a>
  </article>
}
