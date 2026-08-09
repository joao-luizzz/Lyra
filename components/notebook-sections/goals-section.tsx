import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

const QUARTER_GOALS = [
  { label: "Ship the new configurator", done: true },
  { label: "Read four books", done: true },
  { label: "Run a 10k", done: false },
]

export function GoalsSection() {
  return (
    <SectionShell meta={SECTION_META[2]}>
      <p>Small, consistent steps compound. This page gets reviewed every Sunday.</p>
      <div className="rounded-lg border border-border bg-background/50 p-5">
        <h3 className="mb-4 font-serif text-lg font-medium text-foreground">This quarter</h3>
        <ul className="flex flex-col gap-3">
          {QUARTER_GOALS.map((goal) => (
            <li key={goal.label} className="flex items-center gap-3 text-sm">
              <span
                className="flex h-5 w-5 flex-none items-center justify-center rounded border"
                style={{
                  borderColor: goal.done ? SECTION_META[2].color : "hsl(var(--border))",
                  background: goal.done ? SECTION_META[2].color : "transparent",
                }}
                aria-hidden="true"
              >
                {goal.done && (
                  <svg viewBox="0 0 16 16" className="h-3 w-3 text-background" fill="none" aria-hidden="true">
                    <path
                      d="M3.5 8.5l3 3 6-7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span className={goal.done ? "text-foreground/60 line-through" : "text-foreground"}>
                {goal.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm text-muted-foreground">
        Long term, the aim is the same: keep the list short enough to actually finish.
      </p>
    </SectionShell>
  )
}
