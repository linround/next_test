import React from "react";
import {Metadata} from "next";


export const metadata:Metadata = {
  title: 'Dashboard',
}

// 创建该路径下的共享部分
// 其子路径也会共享这部分的页面
// layout文件会作为page文件的容器
export default function DashboardLayout({children,}: {
  children: React.ReactNode
}){
  console.log('DashboardLayout')
  return (
    <h1>
      DashboardLayout
      <div className={'child'}>{children}</div>
    </h1>
  )
}
