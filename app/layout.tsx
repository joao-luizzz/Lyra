import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mundo Lyra - Notebook",
  description: "Interactive 3D notebook for Mundo Lyra.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f8fafc",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
          .material-symbols-outlined.filled {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
          .glow-amber {
            box-shadow: 0 0 40px 10px rgba(197, 160, 89, 0.15);
          }
          .glow-effect {
            box-shadow: 0 0 40px 0 rgba(197, 160, 89, 0.15);
          }
          .btn-lyra-primary {
            background-color: #1A2F23;
            color: #ffffff;
            transition: all 0.3s ease;
          }
          .btn-lyra-primary:hover {
            box-shadow: 0 4px 15px rgba(197, 160, 89, 0.3);
            border-bottom: 2px solid #C5A059;
          }
          .organic-border {
            border: 1px solid #E5E1D8;
          }
        `}</style>
      </head>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
