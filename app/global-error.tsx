'use client'

// error会用来替代page发生的错误(比如渲染了未知变量)，但不会影响layout和template的错误
export default function GlobalError() {
  return (
    <div>
      <h1> global something went wrong</h1>
    </div>
  )
}
