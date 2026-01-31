import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin", "cyrillic"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TechEdu - IT Ta\'lim Markazi | Zamonaviy Kasblar',
  description: 'O\'zbekistondagi yetakchi IT ta\'lim markazi. Frontend, Backend, Python, UI/UX va boshqa yo\'nalishlar bo\'yicha professional ta\'lim. 95% bitiruvchilarimiz ishga joylashgan.',
  keywords: ['IT kurslar', 'dasturlash', 'frontend', 'backend', 'python', 'web development', 'Toshkent'],
    
}

export const viewport: Viewport = {
  themeColor: '#6366f1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
