import type { ReactNode } from "react"
import type { SectionMeta } from "./data"

export function SectionShell({
  meta,
  children,
}: {
  meta: SectionMeta
  children: ReactNode
}) {
  return (
    <section
      aria-labelledby={`chapter-${meta.id}`}
      className="relative border-t border-slate-200 bg-white px-6 py-16 text-slate-900 shadow-sm md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, transparent, ${meta.color}, transparent)` }}
      />
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 flex-none rounded-full shadow-sm" style={{ background: meta.color }} />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{meta.chapter}</p>
        </div>
        <h2
          id={`chapter-${meta.id}`}
          className="text-balance font-serif text-3xl font-bold text-slate-900 md:text-5xl"
        >
          {meta.label}
        </h2>
        <div className="flex flex-col gap-6 text-pretty font-sans leading-relaxed text-slate-700">{children}</div>
      </div>
    </section>
  )
}
