import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mundo Lyra | Ambientes Sensoriais",
  description: "Conheça a Sala Sensorial e a Sala de Descompressão Mundo Lyra, da Foco Soluções Educacionais.",
  other: { "codex-preview": "development" },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f5f1e8",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
