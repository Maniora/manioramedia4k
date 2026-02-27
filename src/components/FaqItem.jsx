'use client'
import { useRef, useState, useEffect } from 'react'

const FaqItem = ({ question, answer, delay = 0, defaultOpen = false, open: controlledOpen, onToggle }) => {
  const isControlled = typeof controlledOpen === 'boolean'
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const open = isControlled ? controlledOpen : uncontrolledOpen
  const contentRef = useRef(null)
  const [maxH, setMaxH] = useState(defaultOpen ? '500px' : '0px')

  useEffect(() => {
    const h = contentRef.current ? contentRef.current.scrollHeight : 0
    setMaxH(open ? `${h + 32}px` : '0px')
  }, [open, answer])

  const handleClick = () => {
    if (isControlled) {
      onToggle && onToggle()
    } else {
      setUncontrolledOpen((v) => !v)
    }
  }

  return (
    <div
      className={`border-b transition-colors duration-200 ${open ? 'border-[#f7e839]/20' : 'border-white/[0.08]'
        }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        type="button"
        className="w-full text-left py-5 flex items-center justify-between gap-6 group"
        onClick={handleClick}
        aria-expanded={open}
      >
        <span className={`font-semibold text-[15px] leading-snug transition-colors duration-200 ${open ? 'text-[#f7e839]' : 'text-white/80 group-hover:text-white'
          }`}>
          {question}
        </span>

        {/* Chevron */}
        <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${open
            ? 'border-[#f7e839]/40 bg-[#f7e839]/10 text-[#f7e839]'
            : 'border-white/10 text-white/40 group-hover:border-white/20 group-hover:text-white/60'
          }`}>
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          >
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: maxH }}
        className="overflow-hidden transition-[max-height] duration-400 ease-in-out"
      >
        <p className="text-white/55 text-sm leading-relaxed pb-6 max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default FaqItem
