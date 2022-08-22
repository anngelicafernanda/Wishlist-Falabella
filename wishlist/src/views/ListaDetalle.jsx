//key

import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Popup } from '../components/Popup'


export function ListaDetalle() {

  const [popUp, setPopUp] = useState(false)


  return (
    <div>ListaDetalle
        <Link className='bg-orange-500' to="/">Agregar producto</Link>
        <button onClick={() => setPopUp(true)} >Crear Lista</button>
        <Popup trigger={popUp} setTrigger={setPopUp} btnName={"Crear"} />
    </div>
  )
}
