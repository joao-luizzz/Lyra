import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

const meta = SECTION_META[3]

export function SinaptofonoSection() {
  return (
    <SectionShell meta={meta}>
      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-[#4d6355] font-[Montserrat] text-xs font-semibold">
            <span className="material-symbols-outlined text-base">psychology</span>
            <span>Integração Sonora e Cognitiva</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#1c1b1b]">Sinaptofono</h2>
          <p className="font-[Montserrat] text-[18px] leading-relaxed text-[#454742] max-w-lg">
            Conectando sons e estimulando conexões. Uma experiência sensorial imersiva que integra música, vibrações e
            luzes para desenvolver habilidades cognitivas de forma lúdica e acolhedora em ambientes escolares.
          </p>
          <button className="bg-[#1A2F23] text-white px-8 py-3 rounded-full font-[Montserrat] text-base hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-shadow duration-300 w-fit">
            Solicitar Orçamento
          </button>
        </div>
        <div className="rounded-xl overflow-hidden glow-amber relative h-[350px] md:h-[420px]">
          <img
            alt="Sinaptofono"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3fEKOOkLhF8w-xE03QOaHeN_2sdr3VJiT_1cX0bUumpgpDNe2YEohSrNTbOeLhO9pBM9xwcWiaNWQzbKXKc2_9XN5hZ0xqn9__4XBs9dNRGVOeWyqCG9H1aAz91WG2pSUgTRlwLezrD7l-Ch6hhDr-bBhWfgaLbzc5f0NGNAhgSVzuuKE00z7kCdDZ2NLQYs4c4bFJveJL8PEMfFalrTXV7A--lW0lhlZsJLgFWedFDXm4JdNVh3fL5-_Hxsux5TmAts"
          />
        </div>
      </div>

      {/* Pilares da Experiência */}
      <div className="bg-[#f7f3f2] rounded-xl p-8">
        <div className="text-center mb-10">
          <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#1c1b1b] mb-3">
            Pilares da Experiência
          </h3>
          <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742] max-w-2xl mx-auto">
            Design fundamentado em neuroarquitetura para reduzir a sobrecarga sensorial e maximizar o engajamento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: "music_note",
              title: "Explore",
              desc: "Interaja com diferentes timbres e ritmos através de superfícies responsivas.",
              color: "#d0e9d6",
              textColor: "#4d6355",
            },
            {
              icon: "hearing",
              title: "Ouça",
              desc: "Estímulos auditivos calibrados para conforto neurodivergente.",
              color: "#C5A059/20",
              textColor: "#C5A059",
            },
            {
              icon: "favorite",
              title: "Sinta",
              desc: "Feedback háptico sutil que materializa o som em sensações físicas seguras.",
              color: "#d0e9d6",
              textColor: "#4d6355",
            },
            {
              icon: "hub",
              title: "Conecte",
              desc: "Atividades conjuntas que promovem interação social e regulação mútua.",
              color: "#1A2F23/10",
              textColor: "#1A2F23",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-lg p-8 border border-[#e5e2e1] flex flex-col items-center text-center hover:bg-[#fcf8f7] transition-colors duration-300"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${pillar.color.includes("/") ? pillar.color.replace("/20", "") + "33" : pillar.color}` }}
              >
                <span className="material-symbols-outlined text-3xl filled" style={{ color: pillar.textColor }}>
                  {pillar.icon}
                </span>
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#1c1b1b] mb-2">{pillar.title}</h4>
              <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742]">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
