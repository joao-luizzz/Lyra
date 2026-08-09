"use client"

import { useState, type ComponentType } from "react"
import { ThreeDNotebook } from "@/components/3d-notebook"
import { SparkleField } from "@/components/sparkle-field"
import {
  ContactsSection,
  GoalsSection,
  IdeasSection,
  JournalSection,
  NotesSection,
  SECTION_META,
  SketchesSection,
  WelcomeSection,
  type SectionId,
} from "@/components/notebook-sections"

const SECTION_COMPONENTS: Record<SectionId, ComponentType> = {
  welcome: WelcomeSection,
  ideas: IdeasSection,
  goals: GoalsSection,
  journal: JournalSection,
  sketches: SketchesSection,
  notes: NotesSection,
  contacts: ContactsSection,
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null)

  const ActiveSection = activeSection ? SECTION_COMPONENTS[activeSection] : null

  return (
    <main className="relative flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-10">
        {/* Soft blue-to-red ambient radial glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(0,102,204,0.07),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(229,57,53,0.07),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(255,171,0,0.05),_transparent_60%)]" />

        {/* Drifting sparkles */}
        <SparkleField />



        <div className="relative z-10 h-[84vh] w-full max-w-6xl md:h-[92vh]">
          <ThreeDNotebook onSectionChange={(index) => setActiveSection(index !== null ? SECTION_META[index].id : null)} />
        </div>
      </section>

      <div>{ActiveSection && <ActiveSection key={activeSection} />}</div>
    </main>
  )
}
