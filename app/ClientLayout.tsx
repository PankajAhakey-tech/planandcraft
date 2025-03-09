"use client"

import "./globals.css"
import { Raleway } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"
import { usePathname } from "next/navigation"
import StyledComponentsRegistry from "./lib/registry"

const raleway = Raleway({ subsets: ["latin"], weight: ["100", "300", "600"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <StyledComponentsRegistry>
      <body className={`${raleway.className} font-sans`}>
        <Header />
        <main className={`${isHomePage ? "" : "pt-20 px-4 md:px-8"}`}>{children}</main>
        <Footer />
      </body>
    </StyledComponentsRegistry>
  )
}

