//trini (con ange)
import React from 'react';
import { useNavigate } from "react-router-dom";


export function List({list}) {
  const navigate = useNavigate();

  return (
    <div onClick={()=>{navigate('/Lista-detalle')}}>
      <div>{list.name}</div>
      <div>
        {list.products.map((product)=>{
          <div>{product}</div>
        })}
      </div>
    </div>

  )
}
