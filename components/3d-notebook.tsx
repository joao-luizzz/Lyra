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
  const readMore = <span className="page-cta">Read the full chapter below ↓</span>

  const sectionContent: Omit<Section, "bookmark">[] = [
    {
      left: (
        <PageFace eyebrow={chapterLabel(0)} color={bookmarks[0].color} title="The Notebook">
          <p>Every idea starts on a blank page.</p>
          <p>Flip the pages, or tap a ribbon above to jump straight to a chapter.</p>
        </PageFace>
      ),
      right: (
        <PageFace eyebrow={chapterLabel(0)} color={bookmarks[0].color} title="How it works" footer={readMore}>
          <ul className="page-list">
            <li>Click the edge of a page to turn it</li>
            <li>Use the arrow keys once the book is focused</li>
            <li>Tap a colored ribbon to jump to that chapter</li>
          </ul>
        </PageFace>
      ),
    },
    {
      left: (
        <PageFace eyebrow={chapterLabel(1)} color={bookmarks[1].color} title="Brainstorm">
          <ul className="page-list">
            <li>Modular desk lamp with wireless charging</li>
            <li>Weekend trip: coastal trail, three towns</li>
            <li>Redesign the onboarding flow</li>
          </ul>
        </PageFace>
      ),
      right: (
        <PageFace eyebrow={chapterLabel(1)} color={bookmarks[1].color} title="Worth exploring" footer={readMore}>
          <p>&quot;What if the notebook remembered where you left off?&quot;</p>
          <PhotoSlot rotate="2deg" width="90%" caption="jotted down at 11:42pm" />
        </PageFace>
      ),
    },
    {
      left: (
        <PageFace eyebrow={chapterLabel(2)} color={bookmarks[2].color} title="This quarter">
          <ul className="page-list page-list--checked">
            <li>Ship the new configurator</li>
            <li>Read four books</li>
            <li>Run a 10k</li>
          </ul>
        </PageFace>
      ),
      right: (
        <PageFace eyebrow={chapterLabel(2)} color={bookmarks[2].color} title="Long term" footer={readMore}>
          <PhotoSlot rotate="-1deg" width="85%" />
          <p>Small, consistent steps compound.</p>
          <p>Review this page every Sunday.</p>
        </PageFace>
      ),
    },
    {
      left: (
        <PageFace eyebrow={chapterLabel(3)} color={bookmarks[3].color} title="Tuesday">
          <p>Rained most of the day. Good for thinking.</p>
          <PhotoSlot rotate="-3deg" width="80%" />
          <p>Started sketching the new layout — felt right almost immediately.</p>
        </PageFace>
      ),
      right: (
        <PageFace eyebrow={chapterLabel(3)} color={bookmarks[3].color} title="Wednesday" footer={readMore}>
          <p>Coffee with an old friend. Talked for two hours without noticing.</p>
        </PageFace>
      ),
    },
    {
      left: (
        <PageFace eyebrow={chapterLabel(4)} color={bookmarks[4].color} title="Rough shapes">
          <PhotoSlot rotate="4deg" width="88%" />
          <div className="sketch-grid">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="sketch-box" />
            ))}
          </div>
        </PageFace>
      ),
      right: (
        <PageFace eyebrow={chapterLabel(4)} color={bookmarks[4].color} title="Notes on form" footer={readMore}>
          <p>Rounded corners everywhere. Soft shadow, no harsh edges.</p>
        </PageFace>
      ),
    },
    {
      left: (
        <PageFace eyebrow={chapterLabel(5)} color={bookmarks[5].color} title="Meeting recap">
          <ul className="page-list">
            <li>Ship date moved up a week</li>
            <li>Design review Friday</li>
            <li>Need feedback from the team</li>
          </ul>
        </PageFace>
      ),
      right: (
        <PageFace eyebrow={chapterLabel(5)} color={bookmarks[5].color} title="Reading list" footer={readMore}>
          <ul className="page-list">
            <li>The Design of Everyday Things</li>
            <li>Atomic Habits</li>
          </ul>
          <PhotoSlot rotate="-2deg" width="85%" />
        </PageFace>
      ),
    },
    {
      left: (
        <PageFace eyebrow={chapterLabel(6)} color={bookmarks[6].color} title="Studio">
          <p className="page-mono">hello@studio.co</p>
          <p className="page-mono">+1 (555) 010-2938</p>
        </PageFace>
      ),
      right: (
        <PageFace eyebrow={chapterLabel(6)} color={bookmarks[6].color} title="Printer" footer={readMore}>
          <p className="page-mono">Riso &amp; Co.</p>
          <p className="page-mono">printer@riso.co</p>
          <PhotoSlot rotate="3deg" width="92%" />
        </PageFace>
      ),
    },
  ]

  const sections: Section[] = sectionContent.map((content, i) => ({
    bookmark: bookmarks[i],
    ...content,
  }))

  const frontCover = (
    <div className="storybook-cover" style={{ background: coverColor }}>
      <div className="cover-frame">
        <StarSticker className="sticker sticker--star-a" color="#ffb703" />
        <StarSticker className="sticker sticker--star-b" color="#4cc9f0" />
        <HeartSticker className="sticker sticker--heart" color="#ff6b9d" />
        <div className="cover-logo-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mundo-lyra-logo.png" alt="Mundo Lyra" className="cover-logo-img" />
        </div>
        <p className="cover-wordmark">Our Little Storybook</p>
      </div>
      <div className="ribbon-bow" style={{ background: elasticColor }}>
        <span className="ribbon-bow-knot" />
      </div>
    </div>
  )

  const backCover = (
    <div className="storybook-cover back-cover" style={{ background: coverColor }}>
      <div className="cover-frame">
        <div className="cover-back-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mundo-lyra-logo.png" alt="Mundo Lyra" className="cover-logo-small-img" />
        </div>
      </div>
      <div className="ribbon-bow" style={{ background: elasticColor }}>
        <span className="ribbon-bow-knot" />
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
        <h1 className="intro-title">Step into the storybook</h1>
        <p className="intro-copy">Tap a ribbon to open a chapter, or turn the pages yourself with the arrow keys.</p>
      </div>

      <div className="book-stage">
        <div className="book-glow">
          <div className="book">
            {pages.map((page, idx) => (
              <div key={idx} className="page">
                <div className={`front ${page.front.isCover ? "cover" : ""}`}>{page.front.content}</div>
                <div className={`back ${page.back.isCover ? "cover" : ""}`}>{page.back.content}</div>
                {page.front.isCover && <span className="page-corner" aria-hidden="true" />}
                {page.bookmark && page.sectionIdx !== undefined && (
                  <button
                    type="button"
                    className={`bookmark-tab ${activeIndex === page.sectionIdx ? "is-active" : ""}`}
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
        @import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&display=swap");

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
          flex: 0 1 320px;
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
          background: linear-gradient(90deg, #ff7ea6, #4cc9f0);
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
          color: #475569;
        }

        .book-stage {
          z-index: 1;
          position: relative;
          flex: 1 1 auto;
          min-width: 0;
          margin-left: -18cqmin;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .book-glow {
          display: flex;
          filter: drop-shadow(0 2cqmin 4cqmin rgba(0, 0, 0, 0.14)) drop-shadow(0 0 3cqmin rgba(255, 126, 166, 0.18));
          transition: filter 0.4s ease;
        }
        .book-wrapper:hover .book-glow {
          filter: drop-shadow(0 3cqmin 5cqmin rgba(0, 0, 0, 0.18)) drop-shadow(0 0 4cqmin rgba(255, 126, 166, 0.26));
        }

        .book {
          position: relative;
          display: flex;
          width: 76cqmin;
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
          font-size: 3.7cqmin;
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
          color: #0f172a;
        }

        /* --- children's photo-album cover --- */
        .storybook-cover {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background-image: radial-gradient(rgba(255, 255, 255, 0.65) 2px, transparent 2.5px);
          background-size: 22px 22px;
          background-position: 0 0;
        }

        .storybook-cover::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.25;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .cover-frame {
          position: absolute;
          inset: 1.1em;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.55);
          border: 0.28em dashed rgba(15, 23, 42, 0.28);
          box-shadow: inset 0 0 1.5em rgba(255, 255, 255, 0.4), 0 8px 20px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.7em;
          padding: 1.2em;
        }

        .sticker {
          position: absolute;
          filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.15));
        }
        .sticker--star-a {
          top: 0.5em;
          left: 0.6em;
          transform: rotate(-12deg);
        }
        .sticker--star-b {
          bottom: 0.7em;
          right: 0.6em;
          transform: rotate(14deg);
        }
        .sticker--heart {
          top: 0.9em;
          right: 1em;
          transform: rotate(8deg);
        }

        .cover-logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .cover-logo-img {
          max-width: 78%;
          max-height: 70%;
          object-fit: contain;
          mix-blend-mode: multiply;
          opacity: 0.95;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.12));
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .book-wrapper:hover .cover-logo-img {
          transform: scale(1.04) rotate(-2deg);
        }

        .cover-wordmark {
          margin: 0;
          font-family: "Baloo 2", var(--font-serif), cursive;
          font-weight: 700;
          font-size: 0.85em;
          color: #7a4a8f;
          letter-spacing: 0.01em;
        }

        .cover-logo-small-img {
          max-width: 55%;
          max-height: 55%;
          object-fit: contain;
          mix-blend-mode: multiply;
          opacity: 0.75;
        }

        .cover-back-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        /* ribbon bow instead of a sleek elastic band */
        .ribbon-bow {
          position: absolute;
          right: -0.6em;
          top: 50%;
          translate: 0 -50%;
          width: 1.1em;
          height: 3.2em;
          border-radius: 0.5em;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.15);
        }
        .ribbon-bow-knot {
          position: absolute;
          left: 50%;
          top: 50%;
          translate: -50% -50%;
          width: 1.6em;
          height: 1.6em;
          border-radius: 50%;
          background: inherit;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
        }
        .back-cover .ribbon-bow {
          left: -0.6em;
          right: auto;
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
          right: -4.2cqmin;
          top: calc(15% + var(--tab-index, 0) * 11%);
          appearance: none;
          border: none;
          cursor: pointer;
          min-width: 4.8cqmin;
          height: 3.5cqmin;
          min-height: 24px;
          padding: 0.5em 0.8em;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0 10px 10px 0;
          box-shadow: 4px 2px 8px -2px rgba(0, 0, 0, 0.2), inset 1px 0 0 rgba(255, 255, 255, 0.2);
          filter: brightness(0.95);
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.25s ease, box-shadow 0.25s ease;
          transform-origin: left center;
        }

        .bookmark-tab:hover,
        .bookmark-tab:focus-visible {
          filter: brightness(1.12);
          transform: translateX(0.55em) scale(1.06);
        }

        .bookmark-tab.is-active {
          filter: brightness(1.1);
          transform: translateX(0.4em);
          box-shadow: 4px 2px 10px -1px var(--tab-color, rgba(0, 0, 0, 0.4));
        }

        .bookmark-tab:active {
          transform: translateX(0.3em) scale(0.97);
        }

        .bookmark-label {
          font-family: "Baloo 2", var(--font-sans), "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #fff;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          white-space: nowrap;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
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