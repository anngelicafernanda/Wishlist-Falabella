//trini (con ange)
import React from 'react';
import { useNavigate } from "react-router-dom";

export function List({list}) {
  const navigate = useNavigate();

  list.products.map((product)=>{
    console.log(product.brand)
  })

  return (
    <div onClick={()=>{navigate('/Lista-detalle')}}>
      <div>{list.name}</div>
      <div>
        {list.products.map((product)=>
          <img src={product.images[0]}/>
        )}
      </div>
    </div>
  )
}
