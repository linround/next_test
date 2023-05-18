import './globals.css'
import React, {Suspense} from "react";
import {Navigation} from "@/app/ui/Navigation";
import ButtonNavigation from "@/app/components/ButtonNavigation";

export const metadata = {
  title: 'localhost:3000',
  description: 'next app 服务单段渲染实例',
}

export default function RootLayout({
  children,
  team,
  analytics,
  auth
}: {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
  auth:React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <div className={'app layout'} >
        <div>{auth}</div>
        <p style={{background:'blueviolet',color:'white'}}>父级路由：</p>
        <ButtonNavigation />
        <Navigation href={'/'}>app layout   app page loading(刷新)</Navigation>
        <a href={'/dashboard'}> a标签：dashboard</a>
        {/*使用link进行预取*/}
        {/*标签嵌套问题 p ->div;p->h1  出现报错等等*/}
        {/*<p><h1></h1></p>*/}
        {/*<p><div></div></p>*/}
        <Navigation href={'/ui'} >link标签：ui</Navigation>
        <Navigation href={'/dashboard'}>link标签：dashboard</Navigation>

        <p style={{background:'blueviolet',color:'white'}}>相关内容：</p>
        <div>{team}</div>
        <div>{analytics}</div>
        <div style={{backgroundColor:'chartreuse'}} >{children}</div>
      </div>
      </body>
    </html>
  )
}
