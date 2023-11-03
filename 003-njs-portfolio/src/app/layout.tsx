import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BackgroundRed from '@/components/background-red'
import BackgroundBlue from '@/components/background-blue'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ricardo | Personal Portfolio',
  description: 'Ricardo is a full-stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
      className={`${inter.className} relative bg-gray-50 text-gray-950`}>
        <BackgroundRed />
        <BackgroundBlue />
        {children}
        </body>
    </html>
  )
}
