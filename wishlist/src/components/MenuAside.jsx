//key
import React from "react";
import { Link } from "react-router-dom";
import user from "../assess/img/Shape.png";
import compras from "../assess/img/Vector.png";
import lista from "../assess/img/Group.png";
import direccion from "../assess/img/direccion png.png";
import pago from "../assess/img/pago.png";
import giftcard from "../assess/img/giftcard.png";
import cambiarcontraseña from "../assess/img/cambiar contrasena.png";
import Combined from "../assess/img/Combined png.png";
import iconoFoward from "../assess/img/foward.png";

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
      icon: <img src={Combined} />,
      to: "/Cerrar sesion",
      section: "Cerrar sesion",
    },
  ];
  return (
    <>
      <div className=" bg-white w-[321px] h-[559px] shadow-xl rounded ">
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div className="flex w-full p-[20px] text-sm font-medium  hover:border-l-4 ">
              <i className="mr-[10px]">{item.icon}</i>
              <h2 className="text-[16px] ">{item.display}</h2>
              <div className=" w-10 ml-auto p-1 ">
                <img src={iconoFoward} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default MenuAside;
