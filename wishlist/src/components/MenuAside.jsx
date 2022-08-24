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
import iconsidebar from "../imgFalabella/RightArrow";

const MenuAside = () => {
  let sidebarNavItems = [
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
      display: "Mis lista",
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
      display: "Cerrar sesion",
      icon: <img src={cerrarsesion} />,
      to: "/Cerrar sesion",
      section: "Cerrar sesion",
    },
  ];
  return (
    <>
      <div className=" bg-white w-[321px] h-[559px] shadow-xl rounded ">
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div className="flex w-full p-[21px] text-sm font-medium  hover:border-l-4 shadow-sm ">
              <i className="mr-[10px]">{item.icon}</i>
              <h2 className="text-[16px] tex-[#333333] ">{item.display}</h2>
              <div className=" w-6 ml-auto p-1 ">
                <img src={iconsidebar} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default MenuAside;
