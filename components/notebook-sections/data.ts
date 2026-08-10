export type SectionId =
  | "parque-pirilim"
  | "centro-atendimento"
  | "circulacao"
  | "sinaptofono"
  | "cantinho-aromas"
  | "sala-descompressao"
  | "comunicacao-acessivel"

export interface SectionMeta {
  id: SectionId
  label: string
  chapter: string
  color: string
  synopsis: string
}

// Mundo Lyra — 7 ambientes neuroinclusivos, um por capítulo.
export const SECTION_META: SectionMeta[] = [
  {
    id: "parque-pirilim",
    label: "Parque Pirilim",
    chapter: "Capítulo I",
    color: "#1e3a8a", // Deep Blue
    synopsis:
      "Um ambiente dinâmico projetado para o desenvolvimento motor, aprimoramento da propriocepção e facilitação da integração social, com monitoramento tecnológico contínuo.",
  },
  {
    id: "centro-atendimento",
    label: "Centro de Atendimento",
    chapter: "Capítulo II",
    color: "#3730a3", // Indigo
    synopsis:
      "O primeiro contato define a jornada. Uma recepção meticulosamente projetada para oferecer acolhimento seguro, reduzindo a ansiedade e respeitando as individualidades de cada visitante.",
  },
  {
    id: "circulacao",
    label: "Circulação Neuroinclusiva",
    chapter: "Capítulo III",
    color: "#4c1d95", // Purple
    synopsis:
      "Os espaços de transição não são apenas corredores — são ferramentas educacionais ativas. Trilhas sensoriais e sinalização afetiva transformam o fluxo escolar em momentos de regulação.",
  },
  {
    id: "sinaptofono",
    label: "Sinaptofono",
    chapter: "Capítulo IV",
    color: "#701a75", // Magenta/Plum
    synopsis:
      "Conectando sons e estimulando conexões. Uma experiência sensorial imersiva que integra música, vibrações e luzes para desenvolver habilidades cognitivas de forma lúdica e acolhedora.",
  },
  {
    id: "cantinho-aromas",
    label: "Cantinho dos Aromas",
    chapter: "Capítulo V",
    color: "#831843", // Deep Rose
    synopsis:
      "Um refúgio sensorial projetado para proporcionar equilíbrio e acolhimento através da aromaterapia, reduzindo a ansiedade e promovendo o foco com estimulação olfativa controlada.",
  },
  {
    id: "sala-descompressao",
    label: "Sala de Descompressão",
    chapter: "Capítulo VI",
    color: "#9f1239", // Crimson
    synopsis:
      "Um refúgio seguro para regulação emocional e sensorial imediata. Acústica impecável, iluminação controlada e elementos táteis sutis proporcionam uma pausa restauradora.",
  },
  {
    id: "comunicacao-acessivel",
    label: "Comunicação Acessível",
    chapter: "Capítulo VII",
    color: "#991b1b", // Deep Red
    synopsis:
      "Um ambiente imersivo que integra ferramentas de Comunicação Aumentativa e Alternativa (AAC) em design acolhedor, fomentando a expressão autônoma através de painéis iluminados e recursos táteis.",
  },
]
