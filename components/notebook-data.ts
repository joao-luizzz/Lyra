export interface Product {
  id: string
  chapter: string
  label: string
  shortLabel: string
  eyebrow: string
  color: string
  softColor: string
  image: string
  catalog: string
  mantra: string[]
  synopsis: string
  sensoryNote: string
  items: string[]
  highlights: Array<{ title: string; copy: string }>
}

export const PRODUCTS: Product[] = [
  {
    id: "sala-sensorial",
    chapter: "01",
    label: "Sala Sensorial Mundo Lyra",
    shortLabel: "Sala Sensorial",
    eyebrow: "estimulação e desenvolvimento",
    color: "#173c72",
    softColor: "#e5edf7",
    image: "/assets/sala-sensorial.webp",
    catalog: "/catalogos/catalogo-sala-sensorial.pdf",
    mantra: ["Estimular", "Regular", "Desenvolver", "Florescer"],
    synopsis:
      "Um ambiente integrado para explorar movimento, comunicação, percepção e autorregulação por meio de experiências sensoriais planejadas.",
    sensoryNote:
      "A sala reúne recursos táteis, visuais, motores e comunicacionais em um percurso que pode ser adaptado a diferentes perfis e objetivos educacionais.",
    items: [
      "Estação de monitoramento",
      "Parede de escalada",
      "Constelação de Lyra",
      "Barra do macaco",
      "Tubo de bolhas",
      "Espaço AAC",
      "Cantinho dos aromas",
      "Estante pedagógica",
      "Safe Corner",
      "Painel de atividades",
      "Sinaptofono®",
      "Orbitalis®",
      "Caminho sensorial",
      "Mesa de atividades",
    ],
    highlights: [
      {
        title: "Exploração multissensorial",
        copy: "Texturas, luz, vibração, movimento e som organizados em um único ambiente.",
      },
      {
        title: "Recursos integrados",
        copy: "Estações complementares para diferentes propostas pedagógicas e terapêuticas.",
      },
      {
        title: "Percurso adaptável",
        copy: "A experiência pode ser graduada conforme o ritmo, a necessidade e o objetivo de cada grupo.",
      },
    ],
  },
  {
    id: "sala-descompressao",
    chapter: "02",
    label: "Sala de Descompressão Mundo Lyra",
    shortLabel: "Descompressão",
    eyebrow: "acolhimento e autorregulação",
    color: "#365b45",
    softColor: "#e5eee7",
    image: "/assets/sala-descompressao.webp",
    catalog: "/catalogos/catalogo-sala-descompressao.pdf",
    mantra: ["Acolher", "Respirar", "Organizar", "Retornar"],
    synopsis:
      "Um espaço de pausa e reorganização emocional concebido para acolher, reduzir estímulos e apoiar o retorno às atividades.",
    sensoryNote:
      "Mobiliário envolvente, sinalização emocional e recursos de calma tornam a pausa compreensível, segura e funcional dentro da rotina escolar.",
    items: [
      "Painel das emoções",
      "Sofá curvo com almofadas",
      "Tubo de bolhas",
      "Estante baixa com nichos",
      "Painel de estratégias",
      "Sofá concha acolhedor",
      "Sofá com nicho lateral",
      "Fonte da calma",
      "Mesa de atividades",
    ],
    highlights: [
      {
        title: "Pausa com propósito",
        copy: "Um ambiente que acolhe a necessidade de parar sem transformar a pausa em afastamento.",
      },
      {
        title: "Estratégias visíveis",
        copy: "Painéis ajudam a reconhecer emoções e escolher caminhos possíveis para reorganizar-se.",
      },
      {
        title: "Retorno mais seguro",
        copy: "O espaço apoia a transição de volta à atividade, respeitando o tempo de cada pessoa.",
      },
    ],
  },
]
