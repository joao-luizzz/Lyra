import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

const meta = SECTION_META[2]

export function CirculacaoSection() {
  return (
    <SectionShell meta={meta}>
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-[#C5A059] font-[Montserrat] text-xs font-semibold tracking-widest uppercase">
            Arquitetura Sensorial
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-[#1c1b1b]">
            Circulação Neuroinclusiva
          </h2>
          <p className="font-[Montserrat] text-[18px] leading-relaxed text-[#454742]">
            Os espaços de transição não são apenas corredores; são ferramentas educacionais ativas. Descubra como
            trilhas sensoriais e sinalização afetiva transformam o fluxo escolar em momentos de regulação e aprendizado
            orgânico.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-[#1A2F23] text-white font-[Montserrat] text-sm font-semibold rounded-lg hover:bg-[#1A2F23]/90 transition-all duration-300 border-b-2 border-transparent hover:border-[#C5A059] glow-amber group w-fit">
            Leve para sua escola
            <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
        <div className="relative w-full h-[350px] lg:h-[500px] rounded-2xl overflow-hidden border border-[#E5E1D8]">
          <img
            alt="Circulação Neuroinclusiva"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqlAa0xC4e1n_VQ9INOfGWfWqzirNm-WwOfNGxLcxFTCPyYLENg-w5T0hkIGcytbgfcKI9DcAKQCEUpuWnTtp1pR6uaiKsLQhPh2AJhrN9q-6OngbaW4qLCZYte5du_1zGNxHPNjrFrq2Qrap1Fbx08xjNO6HQbZkZ6WDGuumg4ecnR6obvmFqc80VT3k8r252tK_y7FWjvHIlsACbUzqec3GsrR9C922vRSg3Y0nahU4PnoGGWMCenxnq2wsBEwqh0CI"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
        </div>
      </div>

      {/* Bento Grid — A Ciência do Fluxo */}
      <div className="bg-[#f7f3f2] py-10 px-8 rounded-2xl">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h3 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b] mb-3">A Ciência do Fluxo</h3>
          <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">
            Como a arquitetura neuroinclusiva estrutura a experiência de transição entre ambientes de alta e baixa
            demanda cognitiva.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 – wide */}
          <div className="md:col-span-2 bg-white rounded-xl p-8 border border-[#E5E1D8] relative overflow-hidden group">
            <div className="absolute top-4 right-4 opacity-10 text-[#4d6355]">
              <span className="material-symbols-outlined text-6xl">psychiatry</span>
            </div>
            <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b] mb-3 relative z-10">
              Regulação Sensorial Ativa
            </h4>
            <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742] relative z-10 max-w-md">
              Trilhas de piso texturizadas e padrões visuais orgânicos guiam o olhar, reduzindo a ansiedade de
              transição. O design encoraja o movimento ritmado, essencial para a autorregulação antes de entrar em salas
              de aula.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F5F2EA] rounded-xl p-8 border border-[#E5E1D8] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#d0e9d6] rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[#4d6355]">nature_people</span>
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b] mb-2">Empatia no Fluxo</h4>
            </div>
            <p className="font-[Montserrat] text-sm leading-relaxed text-[#454742]">
              Sinalização baseada em símbolos de cuidado, promovendo respeito mútuo e ritmo compartilhado.
            </p>
          </div>

          {/* Card 3 – image card */}
          <div className="bg-white rounded-xl border border-[#E5E1D8] overflow-hidden md:row-span-2 flex flex-col">
            <div className="h-44 w-full">
              <img
                className="w-full h-full object-cover"
                alt="Sinalização Afetiva"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk9ctLeDKUq_KjPf7m53nDyWP7nQ0IHLFBQqXKk9U-TFP-8y7U5JpwCq00PNoazeDpv-hKpLirXEPtJZr-r8tzAUNkYrXYagjfMRoUW1kBVu2Dbty89rda8K6JkaX-B_E6IDLeYF27e3LJc8klejUz8lcRlWcNwV8nEkKJVvohPNWCULYKGHAIQ9Nelycc1_E2_yBpKkHVENp8BL5tHczBCt1xI476U5K2cmEb3L7qLC0lj7WTVr2DKA"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center">
              <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b] mb-2">Sinalização Afetiva</h4>
              <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">
                Ícones claros e semânticas amigáveis substituem ordens rígidas. A arquitetura fala com o aluno através
                de convites visuais à calma e cooperação.
              </p>
            </div>
          </div>

          {/* Card 4 – CTA */}
          <div className="md:col-span-2 bg-white rounded-xl p-8 border border-[#E5E1D8] flex items-center justify-between glow-amber">
            <div>
              <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b] mb-2">
                Transforme seu Espaço
              </h4>
              <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">
                Agende uma análise do fluxo circulatório da sua instituição.
              </p>
            </div>
            <button className="p-4 bg-[#4d6355] text-white rounded-full hover:bg-[#4d6355]/90 transition-colors shrink-0">
              <span className="material-symbols-outlined">calendar_month</span>
            </button>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
