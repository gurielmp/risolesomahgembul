import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import SideBar from "@/components/SideBar/SideBar"
import { ReduxProvider } from "@/redux/features/provider"

const inter = Poppins({ subsets: ["latin"], weight: ["400", "700", "200"] })

export const metadata: Metadata = {
  title: "Risoles Omah Gembul | Risoles Producer",
  description: "Risoles Omah Gembul",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <SideBar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
