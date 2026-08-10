import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

const meta = SECTION_META[6]

export function ComunicacaoAcessivelSection() {
  return (
    <SectionShell meta={meta}>
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="inline-flex items-center gap-2 font-[Montserrat] text-xs font-semibold text-[#4d6355] bg-[#d0e9d6] px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-base">psychology</span>
            Arquitetura Neuroinclusiva
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-[#1c1b1b]">
            Comunicação Acessível (AAC)
          </h2>
          <p className="font-[Montserrat] text-[18px] leading-relaxed text-[#454742]">
            Um ambiente imersivo projetado para dar voz a todos os alunos. Integrando ferramentas de Comunicação
            Aumentativa e Alternativa em um design acolhedor, reduzimos a sobrecarga sensorial e fomentamos a expressão
            autônoma através de painéis iluminados e recursos táteis.
          </p>
          <button className="bg-[#1A2F23] text-white font-[Montserrat] text-sm font-semibold px-8 py-4 rounded-full hover:border-b-4 hover:border-[#C5A059] transition-all duration-300 flex items-center gap-2 group w-fit">
            Leve para sua escola
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
        <div className="lg:col-span-7 relative">
          <div className="absolute inset-0 bg-[#e5e2e1] rounded-[32px] transform translate-x-4 translate-y-4" />
          <img
            alt="Sala de Comunicação Acessível"
            className="relative z-10 w-full h-auto rounded-[32px] object-cover glow-effect"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBdMOmgFYq1hQwSFv_ksBIAf73wc3TocTv3W1Rimknc6_1Az09jn1G1thxZHLik-En1Q1x75sP8uGni2nwsOMDTJV5sJe_maRM49bjX0Pmw5npITHVBvCqVwWarMUEgT2MWOY66KwE68iiFnR02EXTDm5V5AP-i-NnMRXzZk4fyZxOLNZtFxtawPh-Gz3oKU4sUVkERJwRReyUHxivXncTvBn8NNxbstGgY2gXyNyOlU5oEFRHEp5H5pTyqDiMM1g9un4"
          />
        </div>
      </div>

      {/* Recursos Integrados */}
      <div className="bg-[#fdfbf7] py-10 px-8 rounded-[40px] border border-[#E5E1D8]">
        <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
          <h3 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b]">Recursos Integrados</h3>
          <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">
            Cada elemento da sala AAC é desenhado com propósito neurocientífico, combinando tecnologia assistiva com
            design orgânico para criar um espaço de "calma estruturada".
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 – wide */}
          <div className="bg-white rounded-2xl p-6 organic-border md:col-span-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[120px] text-[#4d6355]">grid_view</span>
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-[#d0e9d6] rounded-full flex items-center justify-center text-[#4d6355] mb-4">
                <span className="material-symbols-outlined filled">lightbulb</span>
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b]">
                Painel Lexical Iluminado
              </h4>
              <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">
                Matriz visual embutida em madeira clara com retroiluminação LED quente (2700K). Projetado para facilitar
                a seleção de pictogramas essenciais sem causar fadiga ocular.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 organic-border relative overflow-hidden">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#fffafb] rounded-full flex items-center justify-center text-[#605e5f] mb-4">
                <span className="material-symbols-outlined filled">tablet_mac</span>
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b]">Integração Digital</h4>
              <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">
                Estações de trabalho ergonômicas com suportes para tablets de comunicação, perfeitamente alinhados na
                altura do olhar da criança sentada.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 organic-border relative overflow-hidden">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#F5F2EA] rounded-full flex items-center justify-center text-[#C5A059] mb-4">
                <span className="material-symbols-outlined filled">spa</span>
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b]">Mobiliário Tátil</h4>
              <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">
                Assentos em tecidos orgânicos (linho e algodão) com formas arredondadas, oferecendo conforto sensorial
                durante as sessões de aprendizagem.
              </p>
            </div>
          </div>

          {/* Card 4 – wide */}
          <div className="bg-white rounded-2xl p-6 organic-border md:col-span-2 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#e5e2e1] rounded-full flex items-center justify-center text-[#454742] mb-4">
                  <span className="material-symbols-outlined filled">view_list</span>
                </div>
                <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b]">
                  Painéis de Rotina Flexíveis
                </h4>
                <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">
                  Áreas designadas para estruturação de frases prontas e escolhas rápidas, utilizando superfícies de
                  feltro ou velcro acusticamente absorventes.
                </p>
              </div>
              <div className="h-32 bg-[#FDFBF7] rounded-xl flex items-center justify-center border border-[#c6c7c0]/30 p-4">
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-6 bg-[#E5E1D8] rounded w-3/4" />
                  <div className="h-6 bg-[#E5E1D8] rounded w-1/2" />
                  <div className="h-6 bg-[#C5A059]/20 rounded w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
