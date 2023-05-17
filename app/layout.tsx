import './globals.css'
import { Inter } from 'next/font/google'
import React from "react";
import Link from "next/link";
import ThemeProvider from './theme-provider';
const inter = Inter({ subsets: ['latin'] })
import {Navigation} from "@/app/ui/Navigation";

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
        <a href={'/dashboard'}> a标签：dashboard</a>
        {/*使用link进行预取*/}
        <Navigation href={'/ui'} >ui</Navigation>
        <Navigation href={'/dashboard'}>link标签：dashboard</Navigation>
        {children}
      </div>
      </body>
    </html>
  )
}
