"use client"

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react"
import { PRODUCTS, type Product } from "./notebook-data"

interface ThreeDNotebookProps {
  onNavigate?: (page: number) => void
  onSectionChange?: (index: number | null) => void
  className?: string
}

interface PageSide {
  content: ReactNode
  isCover?: boolean
}

interface NotebookPage {
  front: PageSide
  back: PageSide
}

interface DragState {
  pointerId: number
  startX: number
  startY: number
  startPage: number
  startedAt: number
  lastX: number
  lastAt: number
  velocity: number
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

function Cover() {
  return (
    <div className="cover-design">
      <div className="cover-photo-pair" aria-hidden="true">
        <img src="/assets/sala-sensorial.webp" alt="" />
        <img src="/assets/sala-descompressao.webp" alt="" />
      </div>
      <div className="cover-veil" aria-hidden="true" />
      <div className="cover-brand">
        <img src="/assets/logo-mundo-lyra.webp" alt="Mundo Lyra" />
        <span>uma criação Foco Soluções Educacionais</span>
      </div>
      <div className="cover-copy">
        <span>coleção de ambientes sensoriais</span>
        <h1>Espaços para<br />sentir e florescer.</h1>
        <p>Sala Sensorial + Sala de Descompressão</p>
      </div>
      <span className="cover-edition">catálogo interativo · 2026</span>
    </div>
  )
}

function BackCover() {
  return (
    <div className="cover-design cover-design--back">
      <img className="back-logo" src="/assets/logo-foco.webp" alt="Foco Soluções Educacionais" />
      <div className="back-cover-copy">
        <span>Mundo Lyra</span>
        <p>Soluções sensoriais inclusivas e inovadoras para ambientes educacionais.</p>
        <small>comercial@focosolucoeseducacionais.com.br</small>
      </div>
    </div>
  )
}

function ProductOverview({ product }: { product: Product }) {
  return (
    <article
      className="paper-content product-overview"
      style={{ "--product": product.color, "--product-soft": product.softColor } as CSSProperties}
    >
      <div className="paper-photo">
        <img src={product.image} alt={`Projeto da ${product.label}`} />
        <span>{product.chapter}</span>
      </div>
      <div className="paper-copy">
        <span className="paper-index">{product.eyebrow}</span>
        <h2>{product.label}</h2>
        <p>{product.synopsis}</p>
        <div className="paper-mantra" aria-label="Princípios do ambiente">
          {product.mantra.map((word) => <span key={word}>{word}</span>)}
        </div>
      </div>
    </article>
  )
}

function ProductDetails({ product }: { product: Product }) {
  return (
    <article
      className="paper-content product-details"
      style={{ "--product": product.color, "--product-soft": product.softColor } as CSSProperties}
    >
      <header className="paper-header">
        <span className="paper-index">composição do ambiente</span>
        <span className="paper-number">{product.chapter}</span>
      </header>
      <div className="paper-main">
        <h3>Uma solução completa,<br />pensada como sistema.</h3>
        <ul className="feature-list">
          {product.items.slice(0, 6).map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <a className="paper-catalog-link" href={product.catalog} target="_blank" rel="noreferrer">
        Ver catálogo completo <span aria-hidden="true">↗</span>
      </a>
    </article>
  )
}

export function ThreeDNotebook({
  onNavigate,
  onSectionChange,
  className = "",
}: ThreeDNotebookProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<DragState | null>(null)
  const currentRef = useRef(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [calmMode, setCalmMode] = useState(false)

  const pages: NotebookPage[] = useMemo(() => [
    {
      front: { content: <Cover />, isCover: true },
      back: { content: <ProductOverview product={PRODUCTS[0]} /> },
    },
    ...PRODUCTS.slice(0, -1).map((product, index) => ({
      front: { content: <ProductDetails product={product} /> },
      back: { content: <ProductOverview product={PRODUCTS[index + 1]} /> },
    })),
    {
      front: { content: <ProductDetails product={PRODUCTS[PRODUCTS.length - 1]} /> },
      back: { content: <BackCover />, isCover: true },
    },
  ], [])

  const pageCount = pages.length
  const activeIndex = currentPage >= 1 && currentPage <= PRODUCTS.length
    ? currentPage - 1
    : null

  const renderPhysics = useCallback((rawPage: number, handY = 0) => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const page = clamp(rawPage, 0, pageCount)
    const progress = page / pageCount
    const balance = progress * 2 - 1
    const open = clamp(page, 0, 1)

    wrapper.style.setProperty("--c", page.toFixed(4))
    wrapper.style.setProperty("--progress", progress.toFixed(4))
    wrapper.style.setProperty("--balance", balance.toFixed(4))
    wrapper.style.setProperty("--gravity", Math.abs(balance).toFixed(4))
    wrapper.style.setProperty("--open", open.toFixed(4))
    wrapper.style.setProperty("--hand-y", clamp(handY, -1, 1).toFixed(4))

    wrapper.querySelectorAll<HTMLElement>(".book-page").forEach((element, index) => {
      const turn = clamp(page - index, 0, 1)
      const arc = Math.sin(Math.PI * turn)
      const isLeft = page > index + 0.5
      const distance = isLeft ? index + 1 : pageCount - index
      const isTurning = turn > 0.001 && turn < 0.999

      element.style.setProperty("--turn", turn.toFixed(4))
      element.style.setProperty("--arc", arc.toFixed(4))
      element.style.setProperty("--sag", (arc * 18).toFixed(3))
      element.style.setProperty("--depth", `${(Math.max(1, distance) * 0.9).toFixed(2)}px`)
      element.style.zIndex = String(isTurning
        ? pageCount * 3
        : isLeft
          ? pageCount + index
          : pageCount - index)
    })
  }, [pageCount])

  const commitPage = useCallback((nextPage: number) => {
    const next = clamp(Math.round(nextPage), 0, pageCount)
    currentRef.current = next
    setCurrentPage(next)
    renderPhysics(next)
    onNavigate?.(next)

    const productIndex = next >= 1 && next <= PRODUCTS.length ? next - 1 : null
    onSectionChange?.(productIndex)
  }, [onNavigate, onSectionChange, pageCount, renderPhysics])

  useEffect(() => {
    renderPhysics(0)
  }, [renderPhysics])

  const beginDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    if (target.closest("button") || target.closest("a")) return

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startPage: currentRef.current,
      startedAt: performance.now(),
      lastX: event.clientX,
      lastAt: performance.now(),
      velocity: 0,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
    event.currentTarget.dataset.dragging = "true"
  }

  const moveDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return

    const width = wrapperRef.current?.querySelector<HTMLElement>(".book-page")?.offsetWidth ?? 320
    const deltaX = event.clientX - drag.startX
    const deltaY = event.clientY - drag.startY
    const now = performance.now()

    drag.velocity = (event.clientX - drag.lastX) / Math.max(1, now - drag.lastAt)
    drag.lastX = event.clientX
    drag.lastAt = now
    renderPhysics(drag.startPage - deltaX / width, deltaY / Math.max(160, width * 0.65))
  }

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return

    const width = wrapperRef.current?.querySelector<HTMLElement>(".book-page")?.offsetWidth ?? 320
    const distance = (event.clientX - drag.startX) / width
    const elapsed = performance.now() - drag.startedAt
    const isFlick = elapsed < 420 && Math.abs(drag.velocity) > 0.28
    let next = drag.startPage

    if (distance < -0.16 || (isFlick && drag.velocity < 0)) next += 1
    if (distance > 0.16 || (isFlick && drag.velocity > 0)) next -= 1

    dragRef.current = null
    delete event.currentTarget.dataset.dragging
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    commitPage(next)
  }

  const statusLabel = currentPage === 0
    ? "Capa"
    : currentPage === pageCount
      ? "Contato"
      : PRODUCTS[currentPage - 1].shortLabel

  return (
    <section className={`notebook-experience ${calmMode ? "is-calm" : ""} ${className}`} aria-label="Catálogo interativo Mundo Lyra">
      <div className="experience-heading">
        <div>
          <span className="experience-kicker">produtos Mundo Lyra</span>
          <h2>Dois ambientes.<br />Diferentes formas de acolher.</h2>
        </div>
        <button
          type="button"
          className="calm-toggle"
          aria-pressed={calmMode}
          onClick={() => setCalmMode((value) => !value)}
        >
          <span className="calm-toggle-dot" aria-hidden="true" />
          {calmMode ? "Modo calma ativo" : "Reduzir estímulos"}
        </button>
      </div>

      <div
        ref={wrapperRef}
        className="book-interaction"
        tabIndex={0}
        role="group"
        aria-label="Arraste horizontalmente ou use as setas para virar as páginas"
        onPointerDown={beginDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault()
            commitPage(currentRef.current - 1)
          }
          if (event.key === "ArrowRight") {
            event.preventDefault()
            commitPage(currentRef.current + 1)
          }
          if (event.key === "Home") commitPage(0)
          if (event.key === "End") commitPage(pageCount)
        }}
      >
        <div className="ambient-field" aria-hidden="true">
          <i /><i /><i />
        </div>
        <div className="book-viewport">
          <div className="gravity-shadow" aria-hidden="true" />
          <div className="book-object">
            <div className="page-stack page-stack--left" aria-hidden="true" />
            <div className="page-stack page-stack--right" aria-hidden="true" />
            {pages.map((page, index) => (
              <div className="book-page" key={index} style={{ "--i": index } as CSSProperties}>
                <div className={`page-face page-face--front ${page.front.isCover ? "is-cover" : ""}`}>
                  {page.front.content}
                  {!page.front.isCover && <span className="page-grain" aria-hidden="true" />}
                </div>
                <div className={`page-face page-face--back ${page.back.isCover ? "is-cover" : ""}`}>
                  {page.back.content}
                  {!page.back.isCover && <span className="page-grain" aria-hidden="true" />}
                </div>
              </div>
            ))}
            <div className="book-binding" aria-hidden="true" />
          </div>
        </div>
      </div>

      <nav className="product-rail" aria-label="Ir para um produto">
        {PRODUCTS.map((product, index) => (
          <button
            key={product.id}
            type="button"
            className={activeIndex === index ? "is-active" : ""}
            aria-current={activeIndex === index ? "page" : undefined}
            onClick={() => commitPage(index + 1)}
            style={{ "--product": product.color, "--product-soft": product.softColor } as CSSProperties}
          >
            <span>{product.chapter}</span>
            <em>{product.shortLabel}</em>
          </button>
        ))}
      </nav>

      <div className="book-controls">
        <button type="button" onClick={() => commitPage(currentRef.current - 1)} disabled={currentPage === 0} aria-label="Página anterior">
          <span aria-hidden="true">←</span><em>voltar</em>
        </button>
        <div className="reading-progress" aria-live="polite">
          <span>{statusLabel}</span>
          <div aria-hidden="true"><i style={{ width: `${(currentPage / pageCount) * 100}%` }} /></div>
          <small>arraste para o lado</small>
        </div>
        <button type="button" onClick={() => commitPage(currentRef.current + 1)} disabled={currentPage === pageCount} aria-label="Próxima página">
          <em>avançar</em><span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  )
}
