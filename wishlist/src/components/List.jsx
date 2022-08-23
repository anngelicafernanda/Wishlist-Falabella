//trini (con ange)
import React from 'react';
import { useNavigate } from "react-router-dom";

export function List({list}) {
  const navigate = useNavigate();

  list.products.map((product)=>{
    console.log(product.offerings[0].price)
  })

  return (
    <div onClick={()=>{navigate(`/Mis-Listas/${list.name}`,
    { state: {list} }
    )}}>

      <div>{list.name}</div>
      <div>
        {list.products.map((product)=>
          <img src={product.images[0]}/>
        )}
      </div>
    </div>
  )
}
