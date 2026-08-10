"use client"

import { useState, type ComponentType } from "react"
import { ThreeDNotebook } from "@/components/3d-notebook"
import { SparkleField } from "@/components/sparkle-field"
import {
  CantinhoAromasSection,
  CentroAtendimentoSection,
  CirculacaoSection,
  ComunicacaoAcessivelSection,
  ParquePirilimSection,
  SECTION_META,
  SalaDescompressaoSection,
  SinaptofonoSection,
  type SectionId,
} from "@/components/notebook-sections"

const SECTION_COMPONENTS: Record<SectionId, ComponentType> = {
  "parque-pirilim": ParquePirilimSection,
  "centro-atendimento": CentroAtendimentoSection,
  circulacao: CirculacaoSection,
  sinaptofono: SinaptofonoSection,
  "cantinho-aromas": CantinhoAromasSection,
  "sala-descompressao": SalaDescompressaoSection,
  "comunicacao-acessivel": ComunicacaoAcessivelSection,
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null)

  const ActiveSection = activeSection ? SECTION_COMPONENTS[activeSection] : null

  return (
    <main className="relative flex min-h-screen w-full flex-col text-slate-900" style={{ backgroundColor: '#F0F4F8' }}>
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-8 md:py-12">
        {/* Subtle ambient glows matching the blue-to-red album cover palette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(30,58,138,0.06),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(153,27,27,0.05),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(255,255,255,0.5),_transparent_60%)]" />

        {/* Drifting sparkles */}
        <SparkleField />

        <div className="relative z-10 h-[88vh] w-full max-w-7xl md:h-[95vh] md:max-w-[1400px]">
          <ThreeDNotebook
            onSectionChange={(index) =>
              setActiveSection(index !== null ? SECTION_META[index].id : null)
            }
          />
        </div>
      </section>

      <div>{ActiveSection && <ActiveSection key={activeSection} />}</div>
    </main>
  )
}
