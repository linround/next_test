import React from "react";

// 这里会包裹着page内容
// 然后替换app页面的page内容
export default function  layout(props:React.PropsWithChildren){
  const {children} = props
  return (
    <div className={'marketing blog layout'}>
      <div>marketing blog layout</div>
      {children}
    </div>
  )
}
