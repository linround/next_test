import './globals.css'
import { Inter } from 'next/font/google'
import React from "react";
import ThemeProvider from './theme-provider';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'localhost:3000',
  description: 'next app 服务单段渲染实例',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className={'app layout'}>
        <h1>app layout</h1>
        {children}
      </div>
      </body>
    </html>
  )
}
