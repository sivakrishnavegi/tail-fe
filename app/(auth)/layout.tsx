import { ClerkProvider } from "@clerk/nextjs";
import { RootLayoutProps } from "./types";
import { Inter } from "next/font/google";
import '../globals.css'
import { dark } from "@clerk/themes";
export const metadata = {
title :'Threads',
description : 'A Next Js Version',
}
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

