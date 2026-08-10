import { SECTION_META } from "./data"
import { SectionShell } from "./section-shell"

const meta = SECTION_META[0]

export function ParquePirilimSection() {
  return (
    <SectionShell meta={meta}>
      {/* Hero */}
      <div className="relative rounded-[24px] overflow-hidden bg-[#ebe7e6] h-[60vh] min-h-[400px] flex items-end p-8 glow-amber">
        <img
          alt="Parque Pirilim"
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNSGkqW0FULT-HlRvCkxGzxbBu0hBwDmwlPbBRn2g-bzWm0vqmkQCdlE_XqHFqzXKLlTDwvrGljRzaKIkga48JE0rTgtLPuLPmVPrCsWyJgIX_AuayJhYRgn3dezaX6RZG3bIzlnhXRn_tDwSnvoMfNfU3fINMjPFL8QCIbIdQWwF06rSlj2ZucQKGceh5LiM28jODkx7fBtLaHYteoxxFuVO-ef2lzGvijWds_NRCpnAkXbH-lQiBzmcoRWnRU_LWTCk"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        <div className="relative z-20 max-w-3xl text-white">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-[12px] font-[Montserrat] font-semibold mb-4 border border-white/30 tracking-[0.05em]">
            Área de Experiências Motoras
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-white mb-4">Parque Pirilim</h2>
          <p className="font-[Montserrat] text-[18px] leading-relaxed text-gray-200 mb-6 max-w-2xl">
            Um ambiente dinâmico projetado para o desenvolvimento motor, aprimoramento da propriocepção e facilitação da
            integração social, garantindo total segurança por meio de monitoramento tecnológico contínuo.
          </p>
          <button className="bg-[#1A2F23] text-white px-8 py-4 rounded-full font-[Montserrat] text-sm font-semibold hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all flex items-center gap-2">
            Solicitar Orçamento
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Nave de Lyra Panel */}
        <div className="md:col-span-8 bg-[#fcf8f7] rounded-2xl p-8 border border-[#e5e2e1] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 text-[#4d6355]">
              <span className="material-symbols-outlined filled text-3xl">rocket_launch</span>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold">Nave de Lyra</h3>
            </div>
            <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742] mb-6">
              Uma estrutura central interativa que estimula a curiosidade e o planejamento motor. Equipada com painéis
              sensoriais e desafios cognitivos integrados ao percurso físico, promovendo o desenvolvimento global da
              criança.
            </p>
          </div>
          <div className="h-56 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Nave de Lyra"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd_0OaS5MonE_8CIwotx6yNfaClWZMT9fF22wjoFLJxY2ae_NA5qG5rQR22lG1SRO-7rHr0bf_miUsdsvLLlV3JY68epgbfNm2Io9JLGw1pAFtWv_z_O6sA1nWdCMnnllFT0ievhG9SHNW989TLwY43HpWr_B3sY5nacEhJRJtIsfxQkwiVfSjoa7uTyN4cAbbOAwHdUMFn7pd_fXGGeUr3BXfF9aLexRjiijdRHInBkhUDMIpbxU5Fw"
            />
          </div>
        </div>

        {/* Parede de Escalada Panel */}
        <div className="md:col-span-4 bg-[#f7f3f2] rounded-2xl p-8 border border-[#e5e2e1] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 text-[#4d6355]">
              <span className="material-symbols-outlined filled text-3xl">terrain</span>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold">Parede de Escalada</h3>
            </div>
            <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742] mb-6">
              Superfícies táteis desenhadas para diferentes níveis de habilidade, fomentando a força muscular,
              coordenação bilateral e resolução de problemas espaciais em um ambiente seguro.
            </p>
          </div>
          <ul className="space-y-3 font-[Montserrat] text-xs font-semibold tracking-[0.05em] text-[#454742]">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4d6355] text-base">check_circle</span>
              Superfícies Antiderrapantes
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4d6355] text-base">check_circle</span>
              Rotas Modulares
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4d6355] text-base">check_circle</span>
              Piso de Absorção de Impacto
            </li>
          </ul>
        </div>

        {/* Centro de Monitoramento */}
        <div className="md:col-span-12 bg-[#d0e9d6]/30 rounded-2xl p-8 border border-[#b4ccbb] flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 rounded-full bg-[#d0e9d6] text-[#536a5b] font-[Montserrat] text-xs font-semibold tracking-[0.05em] mb-4">
              Segurança Integrada
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#1c1b1b] mb-3">
              Centro de Monitoramento
            </h3>
            <p className="font-[Montserrat] text-[16px] leading-relaxed text-[#454742] mb-6">
              O Parque Pirilim é supervisionado por um sistema inteligente que acompanha o desenvolvimento e garante a
              segurança em tempo real, fornecendo relatórios valiosos para a equipe técnica.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#4d6355]">videocam</span>
                </div>
                <div>
                  <p className="font-[Montserrat] text-xs font-semibold text-[#1c1b1b] mb-1">Câmeras em tempo real</p>
                  <p className="font-[Montserrat] text-xs text-[#454742]">Acompanhamento seguro</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#4d6355]">show_chart</span>
                </div>
                <div>
                  <p className="font-[Montserrat] text-xs font-semibold text-[#1c1b1b] mb-1">
                    Monitoramento de desempenho
                  </p>
                  <p className="font-[Montserrat] text-xs text-[#454742]">E progressão motora</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden glow-amber">
            <img
              className="w-full h-full object-cover"
              alt="Centro de Monitoramento"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfG8vSzNQbJ6mw4zySki7gHCeqGrW05a8mU2IpJAopIG6Dn5AttEb1IPp1GFdLPSFRuJ_GWc4qfj6yg1-_LblEYibzVyshljdgkcjUejn4B9jvVkJ98_JH3aO-jYmXmFhOfF0EyxHOxGwePHkyRhXTc8f_zky_XW1D6GEeCdFd_d5lxXqHjvHKZprJdjWR3LL7UrX4JGBCTRTKtOsbCiWrc74R3xRzSEHMnYQImY5XWHh_WCi4tdkwIQ"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
