
interface IProp {
  params:{slug:string[]}
}
// [...slug]使用省略号和中括号 结合的方式； 可以使得匹配后续的所有路径，并将参数解析成数组的形式
// [[...slug]] 双重方括号可以直接替换外部的page
export default function Page(prop:IProp) {
  const {params} = prop
  console.log('*******************app shop slug:',prop)
  return (
    <h1 className={'app shop'}>
      app shop slug
      {params.slug && params.slug.map((s,index)=>{
        return (<div key={index}>{s}</div>)})}
    </h1>
  )
}
