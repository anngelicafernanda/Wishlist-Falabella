//la que termine primero
import React from 'react'

export function Footer() {
  return (
    <div className='footer'>
      <div className='flex justify-around w-full text-footerText mt-8'>
        <div className='flex flex-col w-[239px]'>
          SUSCRIBETE A NUESTRO NEWSLETTER
          <p>Infórmate de lo último de Falabella. </p>
          <p>Nuestras ofertas y novedades directamente en  tu e-mail.</p>
          <div>
            <input className='bg-inputFooter' type="text" name="" id="" placeholder="Ingresa tu E-mail"/>
            <input className='bg-inputFooter' type="text" name="" id="" placeholder="Ingresa tu RUT"/>
          </div>
          <input type="checkbox" name="" id="" />
          <p>Acepto términos y condiciones</p>
          <button>REGISTRATE AQUI</button>
          <div className='flex'>
            <img src="" alt="F" />
            <img src="" alt="T" />
            <img src="" alt="I" />
            <img src="" alt="Y" />
          </div>
        </div>
        <div> SERVICIO AL CLIENTE 
          <ul>
            <li>Contáctanos </li>
            <li>¿Por qué comprar en Falabella.com?</li>
            <li>Métodos y costos de envío</li>
            <li>Seguimiento de mi compra </li>
            <li>Consultar por tus documentos electrónicos</li>
            <li>Cambios y devoluciones</li>
            <li>Términos y condiciones</li>
            <li>Política de privacidad</li>
            <li>Política de cookies</li>
            <li>Control de suscripciones</li>
          </ul>
        </div>
        <div> MÁS FALABELLA 
          <ul>
            <li>¿Como vender en Falabella.com?</li>
            <li>Nuestro empresa</li>
            <li>Inversionistas</li>
            <li>Proveedores</li>
            <li>Fpay</li>
            <li>Venta empresa</li>
            <li>Trabaja con nosotros</li>
            <li>Club Deco</li>
            <li>Club Bebé</li>
            <li>Novios Falabella</li>
            <li>Celebraciones</li>
            <li>Canal de integridad</li>
            <li>Integrity Channel</li>
          </ul>
        </div>
        <div> EMPRESAS FALABELLA
          <ul>
            <li>Falabella TV</li>
            <li>CMR Falabella</li>
            <li>Banco Falabella</li>
            <li>Viajes Falabella</li>
            <li>Seguros Falabella</li>
            <li>Sodimac</li>
            <li>Homy</li>
            <li>Tottus</li>
            <li>Linio</li>
            <li>Mall Plaza</li>
            <li>Otras Empresas Falabella</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
