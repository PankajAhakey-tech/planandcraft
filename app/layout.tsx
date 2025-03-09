import type React from "react"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "PlanAndCraft - Expert Construction Solutions",
  description:
    "Professional civil engineering and architectural services for modern construction projects. Specializing in design, 3D mapping, and project planning.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClientLayout>{children}</ClientLayout>
    </html>
  )
}



import './globals.css'