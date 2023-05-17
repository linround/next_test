import React from "react";
interface IParams {
  params: { testSlug:string } // testSlug表示使用了文件名来代表了参数名
}

// generateStaticParams用于在构建时生成动态路由，从而可以提前生成对应的路由
export async function generateStaticParams(){
  const posts = await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('10000')
    },0)
  })
  console.log(posts)
  console.log('post===========:',posts)
  return [{testSlug:posts},{testSlug:'posts'}]
}

// 这里会取代 blog/page的内容
// 同时可以获取路由上的参数
export default function  Page(prop:IParams){
  const {params} = prop
  const {testSlug} = params
  console.log('prop',prop)
  return (
    <h3>
      blog -slug-page
      <p>slug:{testSlug}</p>
    </h3>
  )
}
