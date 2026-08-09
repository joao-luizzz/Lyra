import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

export function NotesSection() {
  return (
    <SectionShell meta={SECTION_META[5]}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="mb-3 font-serif text-lg font-medium text-foreground">Meeting recap</h3>
          <ul className="flex flex-col gap-2 text-sm text-foreground/90">
            <li>Ship date moved up a week</li>
            <li>Design review Friday</li>
            <li>Need feedback from the team</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-serif text-lg font-medium text-foreground">Reading list</h3>
          <ul className="flex flex-col gap-2 text-sm text-foreground/90">
            <li>The Design of Everyday Things</li>
            <li>Atomic Habits</li>
          </ul>
        </div>
      </div>
    </SectionShell>
  )
}
