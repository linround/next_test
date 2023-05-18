// loading会占据page页面的位置，直到page页面加载完成
// 不建议使用suspend 直接使用对应的loading文件
// suspend 可以使得loading更加的细化
export default function Loading() {
  return (
    <div className={'app Dashboard loading'}>
      app dashboard Loading
    </div>
  )
}
