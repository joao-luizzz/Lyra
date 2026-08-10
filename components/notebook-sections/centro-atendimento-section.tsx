import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

const meta = SECTION_META[1]

export function CentroAtendimentoSection() {
  return (
    <SectionShell meta={meta}>
      {/* Hero split-layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#4d6355]">Centro de Atendimento</h2>
            <p className="font-[Montserrat] text-[18px] leading-relaxed text-[#454742]">
              O primeiro contato define a jornada. No Mundo Lyra, a recepção não é apenas um espaço de trânsito, mas um
              ambiente meticulosamente projetado para oferecer um acolhimento inicial seguro, reduzindo a ansiedade e
              estabelecendo um tom de respeito e escuta atenta às individualidades de cada visitante.
            </p>
          </div>
          <button className="bg-[#1A2F23] text-white font-[Montserrat] text-sm font-semibold px-8 py-4 rounded-full hover:border-b-4 hover:border-[#C5A059] transition-all flex items-center gap-2 w-fit glow-amber">
            Agende uma Consultoria
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="relative rounded-xl overflow-hidden h-[350px] lg:h-[480px] w-full">
          <img
            alt="Recepção e Centro de Atendimento Mundo Lyra"
            className="object-cover w-full h-full absolute inset-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIgqqAT5uPON0YNfOtYUYVUV3laNYP_2eZBWMvujB2YRtNsybR7YVJm7IYOWTxG2AYdoUZaIhmHhCVbQypHqtSN2AcVu7dr4pEiOKKTLTegCqHFnZnKrFHn1WD0-CDF0PTFJkaDpWAsfiFTwWscaQ_P2PjCcZXw-0U3RB19gTtCzjIhNqPeb7AEa3nzAYzUH0qO37kUU6gERe1ER9t8XodJVQYfUPqopioq3x317Wa8rFwsQxFgj7A3x_gUeSJzZZucdc"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcf8f7]/20 to-transparent" />
        </div>
      </div>

      {/* Protocolos de Acolhimento */}
      <div className="bg-[#f7f3f2] rounded-xl p-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#4d6355] mb-3">
            Protocolos de Acolhimento
          </h3>
          <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">
            Diretrizes neuroinclusivas aplicadas ao espaço físico para garantir uma experiência inicial tranquila e
            estruturada.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "headphones",
              title: "Estímulos Controlados",
              desc: "Acústica tratada e iluminação indireta (LED quente) para minimizar o impacto sensorial imediato ao entrar no edifício.",
            },
            {
              icon: "favorite",
              title: "Zonas de Descompressão",
              desc: "Espaços adjacentes de espera com mobiliário ergonômico, texturas táteis suaves e privacidade visual para momentos de regulação.",
            },
            {
              icon: "hearing",
              title: "Comunicação Clara",
              desc: "Sinalização visual intuitiva, balcões de atendimento em alturas acessíveis e fluxos de circulação desobstruídos.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white border border-[#c6c7c0]/30 rounded-xl p-8 relative overflow-hidden group hover:border-[#C5A059]/50 transition-colors"
            >
              <div className="w-12 h-12 bg-[#d0e9d6] text-[#4d6355] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined filled">{card.icon}</span>
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b] mb-3">{card.title}</h4>
              <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">{card.desc}</p>
              <span className="material-symbols-outlined absolute top-4 right-4 text-[#c6c7c0]/20 group-hover:text-[#4d6355]/10 text-6xl transition-colors">
                nature
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
