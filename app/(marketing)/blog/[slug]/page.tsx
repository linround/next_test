import React from "react";
interface IParams {
  params: { slug:string }
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
  return [{slug:posts},{slug:'posts'}]
}

// 这里会取代 blog/page的内容
export default function  Page(prop:IParams){
  const {params} = prop
  const {slug} = params
  console.log('prop',prop)
  return (
    <h3>
      blog -slug-page
      <p>slug:{slug}</p>
    </h3>
  )
}
