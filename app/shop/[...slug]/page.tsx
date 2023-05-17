
interface IProp {
  params:{slug:string[]}
}
export default function Page(prop:IProp) {
  const {params} = prop
  console.log('*******************app shop slug:',prop)
  return (
    <h1 className={'app shop'}>
      app shop slug
      {params.slug.map((s,index)=>{
        return (<div key={index}>{s}</div>)})}
    </h1>
  )
}
