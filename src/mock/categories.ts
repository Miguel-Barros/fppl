import {
  Trophy,
  CalendarCheck,
  Handshake,
  Waves,
  TreeStructure,
  UsersThree,
  ClipboardText,
  Certificate,
} from "@phosphor-icons/react/dist/ssr"

export const categories = [
  {
    icon: Trophy,
    title: "Campeões",
    description: "Hall dos campeões",
    route: "/campeoes"
  },
  {
    icon: CalendarCheck,
    title: "Resultados",
    description: "Historico de resultados oficiais",
    route: "/resultados"
  },
  {
    icon: Handshake,
    title: "Clubes",
    description: "Hall dos clubes",
    route: "/clubes"
  },
  {
    icon: Waves,
    title: "Tabua das marés",
    description: "Tabua de análise de marés",
    route: "/mare"
  },
  {
    icon: TreeStructure,
    title: "Organograma",
    description: "Organograma da FPPL",
    route: "/organograma"
  },
  {
    icon: UsersThree,
    title: "Diretores",
    description: "Diretores da FPPL",
    route: "/diretores"
  },
  {
    icon: ClipboardText,
    title: "Normas e Estatutos",
    description: "Documentação oficial da FPPL",
    route: "/estatutos"
  },
  {
    icon: Certificate,
    title: "Regulamentos",
    description: "Regulamentos oficiais da FPPL",
    route: "/regulamentos"
  },
]
