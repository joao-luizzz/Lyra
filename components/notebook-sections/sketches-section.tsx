import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

export function SketchesSection() {
  return (
    <SectionShell meta={SECTION_META[4]}>
      <p>Rough shapes before anything is final. Rounded corners everywhere, soft shadow, no harsh edges.</p>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg border-2 border-dashed"
            style={{ borderColor: `${SECTION_META[4].color}66` }}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Nothing here is precious yet — that&apos;s what makes this chapter useful.
      </p>
    </SectionShell>
  )
}
