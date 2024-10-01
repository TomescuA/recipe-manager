import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import React from 'react'
import Navbar from './_components/Navbar'
import Providers from '@/app/_utils/Providers'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Recipe Manager',
  description: 'Manage your recipes with ease.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
