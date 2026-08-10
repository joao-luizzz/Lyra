"use client"

import { useEffect, useRef, useState } from "react"
import { SECTION_META } from "@/components/notebook-sections/data"

export interface Bookmark {
  label: string
  color: string
  chapter?: string
}

interface Section {
  bookmark: Bookmark
  left: React.ReactNode
  right: React.ReactNode
}

interface ThreeDNotebookProps {
  coverColor?: string
  elasticColor?: string
  bookmarks?: Bookmark[]
  onNavigate?: (page: number) => void
  onSectionChange?: (index: number | null) => void
  className?: string
}

const DEFAULT_BOOKMARKS: Bookmark[] = SECTION_META.map((s) => ({
  label: s.label,
  color: s.color,
  chapter: s.chapter,
}))

const RULED_LINES = `repeating-linear-gradient(
  transparent,
  transparent 24px,
  #00000010 24px,
  #00000010 25px
)`

function StarSticker({ className, color }: { className?: string; color: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="26" height="26" fill={color} aria-hidden="true">
      <path d="M12 1.5l2.8 6.3 6.9.6-5.2 4.6 1.6 6.8L12 16.4l-6.1 3.4 1.6-6.8L2.3 8.4l6.9-.6z" />
    </svg>
  )
}

function HeartSticker({ className, color }: { className?: string; color: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="22" height="22" fill={color} aria-hidden="true">
      <path d="M12 21s-7.5-4.6-10-9.3C.4 8.4 2.2 4.8 5.7 4.2c2-.3 3.9.6 5 2.2a5.9 5.9 0 0 1 3.4-2.2c3.5-.6 5.3 2.2 3.7 5.5C19.5 16.4 12 21 12 21z" />
    </svg>
  )
}

function PhotoSlot({
  rotate = "0deg",
  width = "85%",
  margin = "10px auto",
  caption,
}: {
  rotate?: string
  width?: string
  margin?: string
  caption?: string
}) {
  return (
    <div className="photo-slot" style={{ rotate, width, margin }}>
      <div className="photo-slot-frame">
        <span className="photo-slot-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="9" cy="11" r="2.2" />
            <path d="M21 16l-5.5-5-4 4L8 12l-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="photo-slot-label">photo goes here</span>
      </div>
      {caption && <p className="photo-slot-caption">{caption}</p>}
    </div>
  )
}

function PageFace({
  eyebrow,
  color,
  title,
  footer,
  children,
}: {
  eyebrow: string
  color: string
  title: string
  footer?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div className="page-content" style={{ backgroundImage: RULED_LINES, backgroundSize: "auto 25px" }}>
      <div className="page-face-inner">
        <div className="page-eyebrow">
          <span className="page-dot" style={{ background: color }} />
          {eyebrow}
        </div>
        <h3 className="page-title">{title}</h3>
        <div className="page-body">{children}</div>
        {footer && <div className="page-footer">{footer}</div>}
      </div>
    </div>
  )
}

export function ThreeDNotebook({
  coverColor = "linear-gradient(135deg, #fff3d6 0%, #ffe1ec 50%, #dcecff 100%)",
  elasticColor = "#ff7ea6",
  bookmarks = DEFAULT_BOOKMARKS,
  onNavigate,
  onSectionChange,
  className = "",
}: ThreeDNotebookProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const onNavigateRef = useRef(onNavigate)
  onNavigateRef.current = onNavigate
  const onSectionChangeRef = useRef(onSectionChange)
  onSectionChangeRef.current = onSectionChange

  const chapterLabel = (i: number) => `${bookmarks[i].chapter ?? `0${i + 1}`} — ${bookmarks[i].label}`
  const readMore = <span className="page-cta">Veja o ambiente completo abaixo ↓</span>

  const sectionContent: Omit<Section, "bookmark">[] = SECTION_META.map((section, i) => ({
    left: (
      <PageFace eyebrow={chapterLabel(i)} color={section.color} title={section.label}>
        <p>{section.synopsis}</p>
      </PageFace>
    ),
    right: (
      <PageFace eyebrow={chapterLabel(i)} color={section.color} title="Sobre este espaço" footer={readMore}>
        <ul className="page-list">
          <li>Design neuroinclusivo baseado em evidências</li>
          <li>Materiais sensoriais criteriosamente selecionados</li>
          <li>Integração ao currículo escolar</li>
        </ul>
      </PageFace>
    ),
  }))

  const sections: Section[] = sectionContent.map((content, i) => ({
    bookmark: bookmarks[i],
    ...content,
  }))

  const frontCover = (
    <div className="album-cover">
      {/* White binding strip on left edge */}
      <div className="album-spine" />
      {/* Photo window — centered upper area */}
      <div className="album-photo-window">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mundo-lyra-logo.png" alt="Mundo Lyra" className="album-window-logo" />
      </div>
      {/* Brand label at bottom left with magical writing effect */}
      <div className="album-label">
        <svg viewBox="0 0 300 80" width="180" height="48" className="magic-signature">
          <text x="0" y="55" fontFamily="'Great Vibes', cursive" fontSize="56" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5">
            Mundo Lyra
          </text>
        </svg>
      </div>
    </div>
  )

  const backCover = (
    <div className="album-cover album-cover--back">
      <div className="album-spine album-spine--back" />
      <div className="album-back-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mundo-lyra-logo.png" alt="Mundo Lyra" className="album-back-logo-img" />
      </div>
    </div>
  )

  interface PageSide {
    content: React.ReactNode
    isCover?: boolean
  }

  interface NotebookPage {
    front: PageSide
    back: PageSide
    bookmark?: { label: string; color: string }
    sectionIdx?: number
  }

  const pages: NotebookPage[] = [
    { front: { isCover: true, content: frontCover }, back: { content: sections[0].left }, bookmark: sections[0].bookmark, sectionIdx: 0 },
    ...sections.slice(0, -1).map((section, i) => ({
      front: { content: section.right },
      back: { content: sections[i + 1].left },
      bookmark: sections[i + 1].bookmark,
      sectionIdx: i + 1,
    })),
    { front: { content: sections[sections.length - 1].right }, back: { isCover: true, content: backCover } },
  ]

  const updateCurrent = (next: number) => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    wrapper.style.setProperty("--c", next.toString())
    onNavigateRef.current?.(next)
    const sectionIdx = next >= 1 && next <= sections.length ? next - 1 : null
    setActiveIndex(sectionIdx)
    onSectionChangeRef.current?.(sectionIdx)
  }

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    wrapper.style.setProperty("--c", "0")
    wrapper.style.setProperty("--bend", "0")

    const pageEls = wrapper.querySelectorAll<HTMLElement>(".page")
    pageEls.forEach((page, idx) => {
      page.setAttribute("style", `--i: ${idx}`)
    })

    let isDragging = false
    let startX = 0
    let startC = 0
    let pageWidthPx = 300

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("button") || target.closest(".bookmark-tab")) return
      const firstPage = pageEls[0]
      pageWidthPx = firstPage ? firstPage.getBoundingClientRect().width : 300
      isDragging = true
      startX = e.clientX
      startC = Number(wrapper.style.getPropertyValue("--c")) || 0
      wrapper.setPointerCapture(e.pointerId)
      wrapper.setAttribute("data-dragging", "true")
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return
      const deltaX = e.clientX - startX
      // FIX: dragging the page to the left (deltaX negative) should turn
      // forward, and dragging right should turn back — same as swiping a
      // physical page. The sign here was inverted before, so a forward swipe
      // was visually moving the book backward. `+ deltaX` (not `- deltaX`)
      // is the correct mapping.
      let newC = startC + deltaX / pageWidthPx
      newC = Math.max(0, Math.min(newC, pageEls.length))
      wrapper.style.setProperty("--c", newC.toString())

      const overshoot = newC - startC
      const bend = Math.max(-1, Math.min(1, overshoot)) * 3.5
      wrapper.style.setProperty("--bend", bend.toString())
    }

    const handlePointerUp = (e: PointerEvent) => {
      if (!isDragging) return
      isDragging = false
      wrapper.releasePointerCapture(e.pointerId)
      wrapper.removeAttribute("data-dragging")
      wrapper.style.setProperty("--bend", "0")

      const currentC = Number(wrapper.style.getPropertyValue("--c")) || 0
      const delta = currentC - startC

      let finalC = startC
      if (delta > 0.15) finalC = Math.ceil(startC)
      else if (delta < -0.15) finalC = Math.floor(startC)
      else finalC = Math.round(startC)

      finalC = Math.max(0, Math.min(finalC, pageEls.length))
      updateCurrent(finalC)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!wrapper.contains(document.activeElement)) return

      const currentPage = Number(wrapper.style.getPropertyValue("--c")) || 0
      if (e.key === "ArrowLeft" && currentPage > 0) {
        updateCurrent(currentPage - 1)
      } else if (e.key === "ArrowRight" && currentPage < pageEls.length) {
        updateCurrent(currentPage + 1)
      }
    }

    wrapper.addEventListener("pointerdown", handlePointerDown)
    wrapper.addEventListener("pointermove", handlePointerMove)
    wrapper.addEventListener("pointerup", handlePointerUp)
    wrapper.addEventListener("pointercancel", handlePointerUp)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      wrapper.removeEventListener("pointerdown", handlePointerDown)
      wrapper.removeEventListener("pointermove", handlePointerMove)
      wrapper.removeEventListener("pointerup", handlePointerUp)
      wrapper.removeEventListener("pointercancel", handlePointerUp)
      window.removeEventListener("keydown", handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goToSection = (index: number) => updateCurrent(index + 1)

  return (
    <div className={`book-wrapper ${className}`} tabIndex={0} ref={wrapperRef}>
      <div className="intro-panel hidden md:block">
        <p className="intro-eyebrow">MUNDO LYRA</p>
        <h1 className="intro-title">Explore os nossos ambientes</h1>
        <p className="intro-copy">Toque em uma aba colorida para abrir um capítulo, ou vire as páginas com as setas do teclado.</p>
      </div>

      <div className="book-stage">
        <div className="book-glow">
          <div className="book">
            <div className="spiral-container">
              {[...Array(14)].map((_, i) => (
                <div key={`spiral-${i}`} className="spiral-ring" />
              ))}
            </div>
            {pages.map((page, idx) => (
              <div key={idx} className="page">
                <div className={`front ${page.front.isCover ? "cover" : ""}`}>{page.front.content}</div>
                <div className={`back ${page.back.isCover ? "cover" : ""}`}>{page.back.content}</div>
                {page.front.isCover && <span className="page-corner" aria-hidden="true" />}
                {page.bookmark && page.sectionIdx !== undefined && (
                  <button
                    type="button"
                    className={`bookmark-tab ${activeIndex === page.sectionIdx ? "is-active" : ""} ${
                      activeIndex !== null && page.sectionIdx <= activeIndex ? "is-flipped" : ""
                    }`}
                    style={
                      {
                        background: page.bookmark.color,
                        "--tab-color": page.bookmark.color,
                        "--tab-index": page.sectionIdx,
                      } as React.CSSProperties
                    }
                    onClick={(e) => {
                      e.stopPropagation()
                      goToSection(page.sectionIdx!)
                    }}
                    aria-label={`Open ${page.bookmark.label}`}
                    aria-pressed={activeIndex === page.sectionIdx}
                  >
                    <span className="bookmark-label">{page.bookmark.label}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Great+Vibes&display=swap");

        .book-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: clamp(1.5rem, 4cqw, 4rem);
          perspective: 2200px;
          container-type: size;
          outline: none;
        }

        .intro-panel {
          z-index: 0;
          position: relative;
          flex: 0 1 260px;
          min-width: 0;
          text-align: left;
          pointer-events: none;
          opacity: 0.92;
          transition: opacity 0.5s ease 0.25s;
        }
        .group-has-open-book .intro-panel {
          opacity: 0;
        }
        .intro-eyebrow {
          margin: 0 0 0.75rem 0;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          background: linear-gradient(90deg, #1e3a8a, #991b1b);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .intro-title {
          margin: 0 0 1rem 0;
          font-family: "Baloo 2", var(--font-serif), Georgia, serif;
          font-weight: 700;
          font-size: clamp(2.25rem, 4.5vw, 4rem);
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #0f172a;
        }
        .intro-copy {
          margin: 0;
          font-family: var(--font-sans), sans-serif;
          font-size: 1.15rem;
          max-width: 34ch;
          line-height: 1.6;
          color: #454742;
        }

        .book-stage {
          z-index: 1;
          position: relative;
          flex: 1 1 auto;
          min-width: 0;
          margin-left: -10cqmin;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .book-glow {
          display: flex;
          filter: drop-shadow(0 3cqmin 6cqmin rgba(30, 58, 138, 0.25)) drop-shadow(0 1cqmin 2cqmin rgba(0,0,0,0.18));
          transition: filter 0.4s ease;
        }
        .book-wrapper:hover .book-glow {
          filter: drop-shadow(0 4cqmin 8cqmin rgba(30, 58, 138, 0.35)) drop-shadow(0 1cqmin 3cqmin rgba(0,0,0,0.25));
        }

        .book {
          position: relative;
          display: flex;
          width: clamp(380px, 58cqmin, 620px);
          pointer-events: none;
          transform-style: preserve-3d;
          transition: translate 0.9s cubic-bezier(0.22, 1, 0.36, 1), width 0.3s ease-out,
            transform 0.35s ease-out;
          translate: calc(min(var(--c, 0), 1) * 50%) 0%;
          transform: rotateZ(calc(var(--bend, 0) * 0.5deg))
            scaleY(calc(1 - (var(--bend, 0) * var(--bend, 0)) * 0.0007));
        }

        .book-wrapper[data-dragging="true"] .book {
          transition: width 0.3s ease-out;
        }

        .page {
          --thickness: 4;
          flex: none;
          display: flex;
          width: 100%;
          font-size: clamp(13px, 4cqmin, 16px);
          pointer-events: all;
          user-select: none;
          transform-style: preserve-3d;
          transform-origin: left center;
          cursor: pointer;
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            rotate 0.9s cubic-bezier(0.22, 1, 0.36, 1)
              calc((min(var(--i), var(--c, 0)) - max(var(--i), var(--c, 0))) * 50ms);
          translate: calc(var(--i) * -100%) 0px 0px;
          transform: translateZ(
            calc((var(--c, 0) - var(--i) - 0.5) * calc(var(--thickness) * 0.23cqmin))
          );
          rotate: 0 1 0 calc(clamp(0, var(--c, 0) - var(--i), 1) * -180deg);
        }

        .front,
        .back {
          position: relative;
          flex: none;
          width: 100%;
          backface-visibility: hidden;
          overflow: hidden;
          background-color: #fffdf9;
          translate: 0px;
        }

        .back {
          translate: -100% 0;
          rotate: 0 1 0 180deg;
        }

        .page {
          box-shadow: 0 0.2em 0.5em -0.1em rgba(0, 0, 0, 0.15);
        }

        .front,
        .back {
          display: flex;
          flex-flow: column wrap;
          justify-content: space-between;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          aspect-ratio: 6/5;
        }

        .cover {
          color: #ffffff;
        }

        /* =============================================
           PHOTO ALBUM COVER (matches reference image)
           ============================================= */
        .album-cover {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          /* Blue to red gradient base */
          background-color: #1e3a8a;
          /* Subtle rich leatherette texture layered over the blue-to-red gradient */
          background-image:
            linear-gradient(145deg, rgba(255,255,255,0.04) 0%, transparent 60%),
            repeating-linear-gradient(
              135deg,
              rgba(255,255,255,0.015) 0px,
              rgba(255,255,255,0.015) 1px,
              transparent 1px,
              transparent 4px
            ),
            linear-gradient(135deg, #1e3a8a 0%, #991b1b 100%);
          box-shadow: inset 0 0 0 1px rgba(197, 160, 89, 0.25);
          overflow: visible;
        }

        /* White binding strip — left edge (front cover) */
        .album-spine {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0.55em;
          background: #F5F0EB;
          border-radius: 8px 0 0 8px;
          box-shadow: inset -2px 0 4px rgba(0,0,0,0.15);
        }

        /* Photo window — centered, slightly upper */
        .album-photo-window {
          position: absolute;
          left: 50%;
          top: 33%;
          translate: -50% -50%;
          width: 44%;
          aspect-ratio: 4/3;
          background: #FBF9F5;
          border-radius: 3px;
          /* Classic mat border with subtle gold inner ring */
          padding: 0.48em;
          box-shadow:
            0 4px 14px rgba(0,0,0,0.35),
            inset 0 0 0 1px rgba(197,160,89,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .album-photo-window::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 3px;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
          pointer-events: none;
          z-index: 2;
        }

        .album-window-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 8%;
          mix-blend-mode: multiply;
        }

        /* Small brand label bottom-left */
        .album-label {
          position: absolute;
          bottom: 0.8em;
          left: 1.6em;
        }
        
        .magic-signature text {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: 
            drawSignature 2.5s ease-in-out forwards 0.5s,
            fillSignature 1s ease-in-out forwards 2.5s;
        }

        @keyframes drawSignature {
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes fillSignature {
          to { fill: rgba(255, 255, 255, 0.6); stroke: transparent; }
        }

        /* =============================================
           SPIRAL BINDING
           ============================================= */
        .spiral-container {
          position: absolute;
          left: -0.5cqmin;
          top: 3cqmin;
          bottom: 3cqmin;
          width: 2.2cqmin;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          pointer-events: none;
          transform: translateZ(2px);
        }
        .spiral-ring {
          width: 100%;
          height: 0.8cqmin;
          background: linear-gradient(180deg, #b0adaa 0%, #ffffff 40%, #757371 100%);
          border-radius: 1cqmin;
          box-shadow: 0 2px 4px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.8);
          position: relative;
        }
        .spiral-ring::after {
          content: '';
          position: absolute;
          right: -2px;
          top: 10%;
          bottom: 10%;
          width: 4px;
          background: rgba(0,0,0,0.2);
          border-radius: 50%;
          filter: blur(1px);
        }

        /* Back cover */
        .album-cover--back {
          background-image: linear-gradient(135deg, #1e3a8a 0%, #991b1b 100%);
        }
        .album-spine--back {
          left: auto;
          right: 0;
          border-radius: 0 8px 8px 0;
          box-shadow: inset 2px 0 4px rgba(0,0,0,0.12);
        }
        .album-back-logo {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .album-back-logo-img {
          width: 40%;
          opacity: 0.18;
          filter: brightness(10);
          object-fit: contain;
        }

        .page-corner {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 2.2em;
          height: 2.2em;
          background: linear-gradient(135deg, transparent 50%, rgba(0, 0, 0, 0.08) 50%);
          border-bottom-right-radius: 10px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform: scale(0.8);
        }
        .book-wrapper:hover .page-corner {
          opacity: 1;
          transform: scale(1);
        }

        .page-content {
          width: 100%;
          height: 100%;
          background-color: #fbf6ec;
        }

        .page-face-inner {
          position: relative;
          padding: 1.4em 1.4em;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.9em;
        }

        .page-face-inner::before {
          content: "";
          position: absolute;
          top: -0.4em;
          left: 1.6em;
          width: 2.6em;
          height: 1em;
          background: repeating-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.55),
            rgba(255, 255, 255, 0.55) 4px,
            rgba(0, 0, 0, 0.04) 4px,
            rgba(0, 0, 0, 0.04) 8px
          );
          border-radius: 2px;
          rotate: -4deg;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
          opacity: 0.85;
        }

        .page-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.5em;
          font-family: var(--font-sans), "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 0.50em;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7a6f5c;
        }

        .page-dot {
          width: 0.5em;
          height: 0.5em;
          border-radius: 50%;
          flex: none;
          box-shadow: 0 0 0 3px color-mix(in srgb, currentColor 15%, transparent);
        }

        .page-title {
          margin: 0;
          font-family: "Baloo 2", var(--font-serif), "Times New Roman", Times, Georgia, serif;
          font-size: 1.35em;
          font-weight: 700;
          color: #2b241a;
          line-height: 1.2;
        }

        .page-body {
          font-family: var(--font-sans), "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 0.60em;
          color: #4a4030;
          line-height: 1.55;
          display: flex;
          flex-direction: column;
          gap: 0.7em;
        }

        .page-body p {
          margin: 0;
        }

        .page-note {
          color: #8a7a5c;
          font-size: 0.7em;
          font-style: italic;
        }

        .page-mono {
          font-family: ui-monospace, monospace;
          margin: 0;
        }

        .page-list {
          margin: 0;
          padding-left: 1.1em;
          display: flex;
          flex-direction: column;
          gap: 0.45em;
        }

        .page-list--checked li {
          list-style: none;
          padding-left: 1.4em;
          position: relative;
        }

        .page-list--checked li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.15em;
          width: 0.9em;
          height: 0.9em;
          border-radius: 3px;
          border: 1.5px solid #a08e6c;
        }

        .sketch-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6em;
        }

        .sketch-box {
          aspect-ratio: 1;
          border-radius: 6px;
          border: 1.5px dashed #b8a988;
        }

        .photo-slot {
          position: relative;
          margin: 10px auto;
        }

        .photo-slot-frame {
          background-color: #fff;
          padding: 8px 8px 20px 8px;
          border-radius: 3px;
          box-shadow: 0 6px 12px -3px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.06);
          aspect-ratio: 6/5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.4em;
          background-image: linear-gradient(135deg, #f4f1ea 0%, #e9e4d8 100%);
        }

        .photo-slot-frame::before {
          content: "";
          position: absolute;
          top: -0.55em;
          left: 50%;
          transform: translateX(-50%) rotate(-3deg);
          width: 2.4em;
          height: 1em;
          background-color: rgba(255, 255, 255, 0.75);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
        }

        .photo-slot-icon {
          color: #a89a7c;
        }

        .photo-slot-label {
          font-family: var(--font-sans), sans-serif;
          font-size: 0.62em;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #a89a7c;
        }

        .photo-slot-caption {
          margin: 0.5em 0 0 0;
          text-align: center;
          font-size: 0.72em;
          font-style: italic;
          color: #8a7a5c;
        }

        .page-footer {
          margin-top: auto;
          padding-top: 0.6em;
        }

        .page-cta {
          font-size: 0.62em;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #a8946c;
        }

        .book-wrapper[data-dragging="true"] .page {
          transition: none !important;
        }

        .bookmark-tab {
          position: absolute;
          right: -168px;
          top: calc(4.5% + var(--tab-index, 0) * 13.2%);
          appearance: none;
          border: none;
          cursor: pointer;
          width: 178px;
          height: 32px;
          padding: 0 12px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border-radius: 0 8px 8px 0;
          box-shadow: 4px 3px 10px rgba(0, 0, 0, 0.25), inset 1px 0 0 rgba(255, 255, 255, 0.3);
          filter: brightness(0.96);
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.2s ease, box-shadow 0.2s ease;
          transform-origin: left center;
          z-index: 5;
        }

        .bookmark-tab::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 2px 0 0 2px;
        }

        .bookmark-tab:hover,
        .bookmark-tab:focus-visible {
          filter: brightness(1.14);
          transform: translateX(10px) scale(1.02);
          z-index: 20;
        }

        .bookmark-tab.is-active {
          filter: brightness(1.15);
          transform: translateX(14px);
          box-shadow: 6px 4px 14px var(--tab-color, rgba(0, 0, 0, 0.45));
          z-index: 15;
        }

        .bookmark-tab.is-flipped {
          opacity: 0;
          pointer-events: none;
          transform: translateX(-15px);
        }

        .bookmark-tab:active {
          transform: translateX(8px) scale(0.98);
        }

        .bookmark-label {
          font-family: var(--font-sans), "Montserrat", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #ffffff;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          writing-mode: horizontal-tb;
          transform: none;
        }

        @media (max-width: 767px) {
          .book-wrapper {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}