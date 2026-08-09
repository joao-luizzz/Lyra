export type SectionId = "welcome" | "ideas" | "goals" | "journal" | "sketches" | "notes" | "contacts"

export interface SectionMeta {
  id: SectionId
  label: string
  chapter: string
  color: string
}

// Blue-to-Red gradient spectrum — one bookmark ribbon per chapter.
export const SECTION_META: SectionMeta[] = [
  { id: "welcome", label: "Welcome", chapter: "Chapter I", color: "#0052CC" },
  { id: "ideas", label: "Ideas", chapter: "Chapter II", color: "#0088FF" },
  { id: "goals", label: "Goals", chapter: "Chapter III", color: "#00B8D4" },
  { id: "journal", label: "Journal", chapter: "Chapter IV", color: "#00C853" },
  { id: "sketches", label: "Sketches", chapter: "Chapter V", color: "#FFAB00" },
  { id: "notes", label: "Notes", chapter: "Chapter VI", color: "#FF6D00" },
  { id: "contacts", label: "Contacts", chapter: "Chapter VII", color: "#D32F2F" },
]
