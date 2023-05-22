
export default async function page() {
  const data = await fetch('/products/api',{
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const res = await data.json()
  console.log(res)
  return (
    <h1>product page{JSON.stringify(res)}</h1>
  )
}
