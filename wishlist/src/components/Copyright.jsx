import React from "react";
import nortonlogo from "../images/nortonlogo.png"

export function Copyright() {
  return (
    <div className="copyright h-[100px]">
      <div>
        <h4 className="text-white">TODOS LOS DERECHOS RESERVADOS</h4>
        <p>Falabella Retail S.A. Manuel Rodriguez 730, Santiago de Chile</p>
      </div>
      <div className="flex items-center">
        <img className="w-[100px] mx-3" src={nortonlogo}/>
        <h4>COMPRA 100% SEGURA</h4>
      </div>
    </div>
  );
}
