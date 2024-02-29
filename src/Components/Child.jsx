import React from 'react'

export default function Child({date,children}) {
    console.log(date,children)
  return (
    <>
    <div>Child</div>
    <p>{date}</p>
    <p>{children}</p>
    </>
  )
}
