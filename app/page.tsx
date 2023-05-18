import styles from './page.module.css'
import {Suspense} from "react";

// async function  ModuleComponent(){
//   await new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(100)
//     },2000)
//   })
//   return (
//     <>Module loading</>
//   )
// }
export default function Home() {
  return (
    <main className={styles.appPage}>
      <h1>app Page</h1>
      <Suspense fallback={<div>app page loading</div>}>
        {/*<ModuleComponent />*/}
      </Suspense>
    </main>
  )
}
