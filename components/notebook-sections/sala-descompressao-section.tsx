import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

const meta = SECTION_META[5]

export function SalaDescompressaoSection() {
  return (
    <SectionShell meta={meta}>
      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6">
          <span className="font-[Montserrat] text-xs font-semibold text-[#C5A059] uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-base">psychiatry</span>
            Arquitetura Neuroinclusiva
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#4d6355]">Sala de Descompressão</h2>
          <p className="font-[Montserrat] text-[18px] leading-relaxed text-[#454742] max-w-lg">
            Um refúgio seguro projetado para oferecer regulação emocional e sensorial imediata. Com acústica impecável,
            iluminação controlada e elementos táteis sutis, este espaço proporciona uma pausa restauradora, essencial
            para a manutenção do bem-estar em ambientes educacionais de alta demanda.
          </p>
          <button className="btn-lyra-primary px-8 py-4 rounded-lg font-[Montserrat] text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-3 w-fit">
            Solicitar Orçamento
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
        <div>
          <div className="relative rounded-2xl overflow-hidden glow-effect aspect-[4/3]">
            <img
              alt="Sala de Descompressão"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDem-DLNKB3KPGTKunyDGUw8f0hEy-gNFKrrj68sy268lzUqDsJR5rOcbyFKdtj0dUAzZxwvISXnGfed_EMYG3HpJdcwb8kRYnIWYd4-NXbAoWRF5NLx0NvgiuveK3jJV5bbzGZm7yZRkQCg_yzOQekYxmChofYaZ2s0qOu_A8omvkEPuCqkUoz9GGY9XAKpgT1DosHrNcBkDdFbt5D2uJ8DAur3F2E9mTUkUUMbK-zzgmw9M6Ai62GmhphFhrsy9YJJ4Y"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4d6355]/40 to-transparent mix-blend-multiply" />
          </div>
        </div>
      </div>

      {/* Benefícios do Refúgio Sensorial */}
      <div className="bg-[#f7f3f2] py-10 px-8 rounded-2xl">
        <div className="text-center mb-10">
          <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#4d6355] mb-3">
            Benefícios do Refúgio Sensorial
          </h3>
          <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742] max-w-2xl mx-auto">
            Cada detalhe é cuidadosamente planejado com base em princípios neurocientíficos para maximizar o conforto e
            a recuperação cognitiva.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: "volume_off",
              title: "Isolamento Acústico Premium",
              desc: "Materiais fonoabsorventes de alta densidade bloqueiam ruídos externos perturbadores, criando um bolsão de silêncio essencial para a descompressão auditiva.",
              bgIcon: "psychology",
            },
            {
              icon: "wb_twilight",
              title: "Iluminação Circadiana",
              desc: "Sistemas de luz indireta e ajustável permitem simular o entardecer ou criar cenários imersivos (como céu estrelado) para induzir calma profunda.",
              bgIcon: "lightbulb",
            },
            {
              icon: "texture",
              title: "Ergonomia Tátil",
              desc: "Mobiliário orgânico, tecidos com texturas reconfortantes e elementos de peso (deep pressure therapy) oferecem contenção física segura e acolhedora.",
              bgIcon: "spa",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl p-8 border border-[#c6c7c0]/20 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-[#4d6355]">{card.bgIcon}</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#fdfaf2] flex items-center justify-center mb-6 border border-[#f3e7c8]">
                <span className="material-symbols-outlined text-[#C5A059]">{card.icon}</span>
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#4d6355] mb-3">{card.title}</h4>
              <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
