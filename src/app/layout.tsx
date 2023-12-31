import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
})

export const metadata: Metadata = {
  title: "Federação Paulista de Pesca e Lançamento",
  description:
    "Repositorio oficial da Federação Paulista de Pesca e Lançamento",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
