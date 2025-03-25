import { cn } from "@/lib/utils"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "Kolawole Kolapo | Software Engineer & Co-Founder",
  description: "I'm a software engineer and co-founder based in Lagos, Nigeria. I specialize in building web applications and software solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://ext.same-assets.com/1375934874/630824737.png" />
      </head>
      <body className={cn(inter.variable, "min-h-screen bg-background antialiased")}>
        {children}
      </body>
    </html>
  )
}
