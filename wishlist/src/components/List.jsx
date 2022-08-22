//trini (con ange)
import React from 'react'

export function List({list}) {
  return (
    <div>
      <div>{list.name}</div>
      <div>
        {list.products.map((product)=>{
          <div>{product}</div>
        })}
      </div>
    </div>

  )
}
