import {Metadata} from "next";

export const metadata:Metadata = {
  title: 'Dashboard-setting',
}
export default function Settings(){
  console.log('Settings')
  return (
    <h1>settings route</h1>
  )
}
