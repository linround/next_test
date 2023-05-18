'use client'
import {useRouter} from "next/navigation";
import React, {Suspense} from "react";

export default function ButtonNavigation(){
  const router = useRouter()
  console.log('===app ButtonNavigation====',)
  // refresh会导致重新渲染，即重新执行该函数
  return (
    <>
      <button type={'button'} style={{padding:'5px'}} onClick={()=>router.push('/dashboard')}>
        button按钮：dashboard
      </button>
      <button type={'button'} style={{padding:'5px'}} onClick={()=>router.refresh()}>
        button按钮：dashboard refresh
      </button>
      <div>

        <button type={'button'} style={{padding:'5px'}} onClick={()=>router.push('/about')}>
          button按钮：about
        </button>
        <button type={'button'} style={{padding:'5px'}} onClick={()=>router.push('/blog')}>
          button按钮：blog
        </button>
        <button type={'button'} style={{padding:'5px'}} onClick={()=>router.push('/account')}>
          button按钮：account
        </button>
      </div>
      <div>

        <button type={'button'} style={{padding:'5px'}} onClick={()=>router.push('/blog/slug2')}>
          button按钮：blog slug2
        </button>
      </div>
      <div>

        <button type={'button'} style={{padding:'5px'}} onClick={()=>router.push('/shop')}>
          button按钮：app  shop
        </button>

        <button type={'button'} style={{padding:'5px'}} onClick={()=>router.push('/shop/one')}>
          button按钮：app  shop one
        </button>

        <button type={'button'} style={{padding:'5px'}} onClick={()=>router.push('/shop/two')}>
          button按钮：app  shop two
        </button>
      </div>
    </>
  )
}
