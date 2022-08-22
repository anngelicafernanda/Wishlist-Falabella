//key

import React from "react";
import { Link } from "react-router-dom";

export function ListaDetalle() {
  return (
    <div>
      ListaDetalle
      <Link className="bg-orange-500" to="/">
        Agregar producto
      </Link>
      <div className="bg-gray-light  sticky w-screen h-screen m-0 border-slate-300    mb-3 mx-8">
        <div className=" font-style::lato text-m content-start font-bold pb-[13px] text-base border-b text-color-border-b flex items-center border-text-color-border-b">
          {/* aqui va una imaguen */}
          <p>Volver a mis listas</p>
        </div>

        <div className="grid grid-flow-col border-b justify-between mt-[70px] pb-[13px] border-text-color-border-b">
          <div className="grid grid-flow-col gap-[15px]">
            <h1 className="font-style:lato font-bold text-base">
              Compras del mes
            </h1>
            <div className="justify-center  space-y-{amount} flex items-center border-text-color-eliminar">
              <p className="font-style:lato text-xs text-base flex-row-reverse underline text-text-color-eliminar">
                Editar
              </p>
            </div>
          </div>
          <p
            className="font-sans text-xs text-base text-color-eliminar text-right mr-8 underline
          text-text-color-eliminar"
          >
            Eliminar lista
          </p>
        </div>

        <div className="border-b pb-[13px] mt-[21px] border-text-color-border-b">
          <h1>No hay Productos</h1>
        </div>
        <button className="border-solid">
          <h1>Agregar productos a la lista</h1>
        </button>
      </div>
    </div>
  );
}
