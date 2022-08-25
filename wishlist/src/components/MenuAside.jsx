//key
import React from "react";
import { Link } from "react-router-dom";
import user from "../imgFalabella/personal-data.svg";
import compras from "../imgFalabella/Vector.png";
import lista from "../imgFalabella/my-lists.svg";
import direccion from "../imgFalabella/my-addresses.svg";
import pago from "../imgFalabella/payments-methods.svg";
import CMR from "../imgFalabella/cmr-card.svg";
import giftcard from "../imgFalabella/gift-cards.svg";
import cambiarcontraseña from "../imgFalabella/passwords.svg";
import cerrarsesion from "../imgFalabella/close-session.svg";
import RightArrow from "../imgFalabella/RightArrow";

const MenuAside = () => {
  let sidebarMenu = [
    {
      display: "Mis datos personales",
      icon: <img src={user} />,
      to: "/mi_datos_personales",
      section: "/mi_datos_personales",
    },
    {
      display: "Mis compras",
      icon: <img src={compras} />,
      to: "/Mis compras",
      section: "Mis compras",
    },
    {
      display: "Mis listas",
      icon: <img src={lista} />,
      to: "/lista",
      section: "lista",
    },
    {
      display: "Mis direcciones",
      icon: <img src={direccion} />,
      to: "/Mis direcciones",
      section: "cMis direcciones",
    },
    {
      display: "Mis medios de pago",
      icon: <img src={pago} />,
      to: "/Mis medios de pago",
      section: "Mis medios de pago",
    },
    {
      display: "Mi CMR",
      icon: <img src={CMR} />,
      to: "/Mi CMR",
      section: "Mi CMR",
    },

    {
      display: "Mis Gift cards",
      icon: <img src={giftcard} />,
      to: "/Mis Gift cards",
      section: "Mis Gift cards",
    },
    {
      display: "Cambiar mi contraseña",
      icon: <img src={cambiarcontraseña} />,
      to: "/Cambiar mi contraseña",
      section: "Cambiar mi contraseña",
    },
    {
      display: "Cerrar sesión",
      icon: <img src={cerrarsesion} />,
      to: "/Cerrar sesion",
      section: "Cerrar sesion",
    },
  ];
  return (
    <>
      <div className=" bg-white w-[321px] h-[559px] shadow-xl rounded ">
        {sidebarMenu.map((item, index) => (
            <div className="flex w-full p-[21px] text-sm border-b- bg-white hover:border-l-4 shadow-outer hover:shadow-inner hover:bg-[#F0F0F0] hover:bg-opacity-100  transition-all duration-100 ease-in-out cursor-pointer ">
              <i className="mr-[10px]">{item.icon}</i>
              <h2 className="text-[16px] tex-[#333333]  ">{item.display}</h2>
              <div className=" w-6 ml-auto p-1  ">
                <RightArrow />
              </div>
            </div>
        ))}
      </div>
    </>
  );
};
export default MenuAside;
