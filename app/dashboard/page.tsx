// 这个特殊的page页面使该路由可访问
// 对于没有page页的文件夹。是不可访问的，该文件夹可用来存放相关的组件，css、images等文件
export default async function Dashboard(){
  await new Promise(resolve => {
    setTimeout(()=>{
      resolve(8000)
    },1000)
  })
  return (
    <h1 className={'app Dashboard page'}>dashboard Route</h1>
  )
}
