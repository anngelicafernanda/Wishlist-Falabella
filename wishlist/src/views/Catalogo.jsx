//traer fotos: trini
//estilo foto: ange y key

import React from 'react'
import { Link } from "react-router-dom";

export function Catalogo() {
  return (
    <div>Catalogo
         <Link className='bg-orange-500' to="/Mis-Listas">Mis Listas</Link>
    </div> 
  )
}
