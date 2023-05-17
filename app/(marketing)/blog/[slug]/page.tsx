import React from "react";
interface IParams {
  params: { slug:string }
}
// 这里会取代 blog/page的内容
export default function page(prop:React.PropsWithChildren<IParams>){
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
