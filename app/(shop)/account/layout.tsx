import React from "react";

// 这里会包裹着page内容
// 然后替换app页面的page内容
export default function  layout(props:React.PropsWithChildren){
  const {children} = props
  return (
    <div>
      <div>marketing account layout</div>
      {children}
    </div>
  )
}
