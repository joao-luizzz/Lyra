import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

const IDEAS = [
  {
    title: "Modular desk lamp",
    detail: "Wireless charging built into the base, so the desk stays clear of cables.",
  },
  {
    title: "Coastal weekend trip",
    detail: "Three small towns along the trail, one night in each.",
  },
  {
    title: "Rethink onboarding",
    detail: "Fewer steps, and let people skip straight to the part they care about.",
  },
]

export function IdeasSection() {
  return (
    <SectionShell meta={SECTION_META[1]}>
      <p>
        Not every idea needs a plan yet — this chapter is just for catching them before they slip away.
      </p>
      <div className="flex flex-col gap-4">
        {IDEAS.map((idea) => (
          <div key={idea.title} className="rounded-lg border border-border bg-background/50 p-5">
            <h3 className="font-serif text-lg font-medium text-foreground">{idea.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{idea.detail}</p>
          </div>
        ))}
      </div>
      <blockquote className="rounded-lg border-l-2 border-primary/60 bg-background/30 px-5 py-4 text-sm italic text-foreground/80">
        &quot;What if the notebook remembered where you left off?&quot;
        <footer className="mt-2 text-xs not-italic uppercase tracking-[0.15em] text-muted-foreground">
          — jotted down at 11:42pm
        </footer>
      </blockquote>
    </SectionShell>
  )
}
