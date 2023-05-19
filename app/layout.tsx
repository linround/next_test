import './globals.css'
import React, {Suspense} from "react";
import {Navigation} from "@/app/ui/Navigation";
import ButtonNavigation from "@/app/components/ButtonNavigation";

export const metadata = {
  title: 'localhost:3001',
  description: 'next app 服务单段渲染实例',
}

export default async function RootLayout(prop: {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
  auth:React.ReactNode
}) {
  const {
    children,
    team,
    analytics,
    auth,
  }=prop
  await new Promise(resolve => {
    setTimeout(resolve,500)
  })
  const ok = Math.random()>0.5
  console.log('===============',prop)
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
        {/*平行路由可以用来做条件渲染，
        在弹框的场景中也可以使用平行路由。即一个路由是另一个路由的组件
        */}
        <div>{ok ? team:analytics}</div>
        <div style={{backgroundColor:'chartreuse'}} >{children}</div>
      </div>
      </body>
    </html>
  )
}
