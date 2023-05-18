import React from "react";
export default function Template({ children }: { children: React.ReactNode }) {
  console.log('app Template')
  return (
    <div className={'app Template'}>
      <h1>app Template</h1>
      {children}
    </div>
  )
}
