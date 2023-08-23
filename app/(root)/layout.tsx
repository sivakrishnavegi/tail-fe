import * as React from 'react';
import { BottomBar, LeftSidebar, RightSidebar, Topbar } from '@/core/components'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })
export const metadata:Metadata = {
  title :'Threads',
  description : 'A Next Js Version',
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <Topbar />
        <main className='flex flex-row'>
          <LeftSidebar />
          <section className="main-container">
            <div className="w-full max-w-4xl">
              {children}
            </div>
          </section>
          <RightSidebar />
        </main>
        <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  )
}
