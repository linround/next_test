'use client';
import style from './ui.module.css'
import { usePathname } from 'next/navigation';
import  Link  from 'next/link';
import React from "react";

export function Navigation(prop:React.PropsWithChildren<{href:string}>) {
  const {href,children} = prop
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <h2>
      <Link href={href} className={isActive ? style.textBlue : 'text-black'}>
        {children}
      </Link>
    </h2>
  );

}
