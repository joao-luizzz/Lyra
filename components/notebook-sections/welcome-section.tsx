import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

const GUIDE = [
  "Click the edge of a page to turn it",
  "Use the arrow keys once the book is focused",
  "Tap a ribbon above the book to jump straight to a chapter",
  "Scroll down — the full chapter always follows the brief",
]

export function WelcomeSection() {
  return (
    <SectionShell meta={SECTION_META[0]}>
      <p className="text-lg md:text-xl">
        Every story in this notebook begins the same way — with a blank page and a little bit of courage.
      </p>
      <p>
        The book above holds seven chapters, one behind each colored ribbon. Opening a ribbon turns the page to a
        short brief; what you&apos;re reading now is the fuller chapter that follows it.
      </p>
      <ol className="grid gap-3 sm:grid-cols-2">
        {GUIDE.map((step, i) => (
          <li
            key={step}
            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-700 shadow-sm"
          >
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-blue-500/40 text-xs font-semibold text-blue-600 bg-blue-50">
              {i + 1}
            </span>
            <span className="leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>
    </SectionShell>
  )
}
