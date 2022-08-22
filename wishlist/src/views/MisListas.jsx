//ange: Declaración de clases tailwind

import React from 'react'
import { useNavigate } from "react-router-dom";


export function MisListas() {
    const navigate = useNavigate();

    const navigateListaDetalle=()=>{
        navigate('/Lista-detalle')
    }

  return (
    <button onClick={navigateListaDetalle} className='bg-orange-500'>MisListas
      
    </button>
  )
}
