import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

const meta = SECTION_META[4]

export function CantinhoAromasSection() {
  return (
    <SectionShell meta={meta}>
      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 flex flex-col items-start gap-6">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#4d6355] leading-tight">
            Cantinho dos Aromas
          </h2>
          <p className="font-[Montserrat] text-[18px] leading-relaxed text-[#454742]">
            Um refúgio sensorial projetado para proporcionar equilíbrio e acolhimento através da aromaterapia. No
            ambiente escolar, a estimulação olfativa controlada ajuda a reduzir a ansiedade, promover o foco e criar uma
            transição suave entre as atividades.
          </p>
          <a
            className="btn-lyra-primary px-8 py-4 rounded-lg font-[Montserrat] text-sm font-semibold uppercase tracking-wider flex items-center gap-2"
            href="#"
          >
            <span>Agende uma Consultoria</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        <div className="md:col-span-7 relative">
          <div className="relative rounded-2xl overflow-hidden glow-amber aspect-[4/3]">
            <img
              alt="Cantinho dos Aromas"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWDDl-v0_y7o6FHa50Eo3qqOYpl6iiWxQTDDnWtTkscaNFYdS4Nc9u4o-TN7Fxt4aXStMzMBFhtIFWn-ce6qGIRdJF1y_SWKFj9iboE0GJPM30qQtEGZ5bZE-Ao5Xuf3sTLRPVP6qMY24s5__hpc1Czp8O0NJXzACTcCjR-R7tpHR22tfmvXShUbWVsIB1IywThdEQO0-R9dFK21c7a6cXdL0f__9jpyO7reonFhmSqH4bi95FPTqao8Tr8u2Cdlh5fR8"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#fcf8f7]/20 to-transparent pointer-events-none" />
          </div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#4d6355]/5 rounded-full blur-2xl" />
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-2xl" />
        </div>
      </div>

      {/* A Ciência do Bem-Estar */}
      <div className="bg-[#f7f3f2] py-10 px-8 rounded-3xl">
        <div className="mb-10">
          <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#4d6355] mb-3">
            A Ciência do Bem-Estar
          </h3>
          <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742] max-w-2xl">
            Descubra como a estimulação olfativa estratégica transforma a percepção do ambiente educacional, oferecendo
            suporte neurobiológico para alunos e educadores.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 border border-[#c6c7c0]/20 relative overflow-hidden group hover:glow-amber transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#4d6355]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#4d6355]">self_improvement</span>
            </div>
            <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b] mb-3">Regulação Emocional</h4>
            <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">
              Óleos essenciais como lavanda e camomila atuam diretamente no sistema límbico, auxiliando na redução de
              picos de estresse e promovendo a calma.
            </p>
            <span className="material-symbols-outlined absolute top-4 right-4 text-[#c6c7c0]/20 text-4xl group-hover:text-[#C5A059]/20 transition-colors">
              energy_savings_leaf
            </span>
          </div>

          {/* Card 2 – wide */}
          <div className="bg-white rounded-xl p-8 border border-[#c6c7c0]/20 relative overflow-hidden group hover:glow-amber transition-all duration-300 md:col-span-2">
            <div className="w-12 h-12 rounded-full bg-[#4d6355]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#4d6355]">psychology</span>
            </div>
            <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b] mb-3">
              Foco e Concentração Cognitiva
            </h4>
            <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">
              Aromas cítricos e mentolados, como alecrim e hortelã-pimenta, são cientificamente comprovados para
              aumentar o estado de alerta, a retenção de memória e a clareza mental durante atividades que exigem alta
              concentração.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Hortelã", "Alecrim", "Limão Siciliano"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#e5e2e1] rounded-full text-xs font-[Montserrat] font-semibold text-[#454742]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="material-symbols-outlined absolute bottom-4 right-4 text-[#c6c7c0]/20 text-6xl group-hover:text-[#C5A059]/20 transition-colors">
              psychology_alt
            </span>
          </div>

          {/* Card 3 – wide with image */}
          <div className="bg-white rounded-xl p-8 border border-[#c6c7c0]/20 relative overflow-hidden group hover:glow-amber transition-all duration-300 md:col-span-3 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-12 h-12 rounded-full bg-[#4d6355]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#4d6355]">spa</span>
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b] mb-3">
                Acolhimento Sensorial
              </h4>
              <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">
                Criar uma identidade olfativa para a escola gera um senso de pertencimento e segurança. Um aroma
                consistente e agradável sinaliza ao cérebro que o ambiente é previsível e seguro, essencial para alunos
                com sensibilidades sensoriais.
              </p>
            </div>
            <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Difusor de aromas"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcnMd1U9dnmyUe5GemU9QzuUnGkNu62TI_Ja1QR19cEPNYPWmkmOSYV6G1KZQ9_MuraaHps7118c26raIXYHkbDcwaQ_1DGZjLlY-Da1fZlCk94Sunrpk9gfYfkTMUPMGiykqqMTPhfCZOuitLujPXG5npPmycGK7D53ivxQUc9oLggMjwrcDKQUyhuWQ6-Nydp8Ucys67PfAFy2BlIGbNpjLkLs_uc4xQcqqQr2jQbL8AVvSx-XdwsQ"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
