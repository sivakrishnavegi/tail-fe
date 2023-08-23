import { ClerkProvider } from "@clerk/nextjs";
import { RootLayoutProps } from "./types";
import { Inter } from "next/font/google";
import '../globals.css'

export const metadata = {
title :'Threads',
description : 'A Next Js Version',
}
const inter = Inter({ subsets: ['latin'] })
const RootLayout = ({
    children,
}:RootLayoutProps) => {
  return (
    <ClerkProvider>
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    </ClerkProvider>
  )
}

export default RootLayout;