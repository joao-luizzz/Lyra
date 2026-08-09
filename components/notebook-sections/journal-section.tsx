import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

const ENTRIES = [
  {
    day: "Tuesday",
    text: "Rained most of the day. Good for thinking. Started sketching the new layout — felt right almost immediately.",
  },
  {
    day: "Wednesday",
    text: "Coffee with an old friend. Talked for two hours without noticing.",
  },
  {
    day: "Friday",
    text: "Quiet morning. Finished the chapter I'd been putting off — turns out it wasn't so bad.",
  },
]

export function JournalSection() {
  return (
    <SectionShell meta={SECTION_META[3]}>
      <p>A few pages, kept mostly for the small things worth remembering.</p>
      <div className="flex flex-col gap-5">
        {ENTRIES.map((entry) => (
          <div key={entry.day} className="border-l-2 border-border pl-5">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">{entry.day}</p>
            <p className="mt-1.5 leading-relaxed text-foreground/90">{entry.text}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
