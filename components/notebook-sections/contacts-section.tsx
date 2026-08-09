import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

const CONTACTS = [
  { name: "Studio", email: "hello@studio.co", phone: "+1 (555) 010-2938" },
  { name: "Printer — Riso & Co.", email: "printer@riso.co", phone: null },
]

export function ContactsSection() {
  return (
    <SectionShell meta={SECTION_META[6]}>
      <p>The last chapter is always the shortest — just the people worth reaching.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {CONTACTS.map((contact) => (
          <div key={contact.name} className="rounded-lg border border-border bg-background/50 p-5">
            <h3 className="font-serif text-base font-medium text-foreground">{contact.name}</h3>
            <p className="mt-2 font-mono text-sm text-muted-foreground">{contact.email}</p>
            {contact.phone && <p className="font-mono text-sm text-muted-foreground">{contact.phone}</p>}
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
