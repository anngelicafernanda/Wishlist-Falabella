//key
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Popup } from '../components/Popup'

export function ListaDetalle() {

  const [popUp, setPopUp] = useState(false);

  return (
    <div>ListaDetalle       
        <Link className='bg-orange-500' to="/">Agregar producto</Link>
        <button onClick={() => setPopUp(true)}>Eliminar</button>
        <Popup trigger={popUp} setTrigger={setPopUp} title={<h4>Eliminar Producto</h4>} desc={<p>Estas apunto de elimnar un producto de la lista</p>} btnName={"Aceptar"} /*clickFunction ={deleteList}*/ />
    </div>
  )
}
