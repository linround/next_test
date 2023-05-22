// You now have access to the current locale
// e.g. /en-US/products -> `lang` is "en-US"
interface prop {
  params:{lang:string}
}
export default async function Page({ params: { lang } }:prop) {
  return <h1>{lang}</h1>
}
