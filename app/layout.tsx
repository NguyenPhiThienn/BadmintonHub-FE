import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { LenisProvider } from '@/components/lenis-provider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin', 'vietnamese'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'BadmintonHub - Mot Cu Dap. Kiem Soat Toan Dien.',
  description: 'Nen tang dat san cau long thong minh. Tim san, dat cho, quan ly san - tat ca trong mot ung dung duy nhat.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#3f6844',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@8..144,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <LenisProvider>
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
