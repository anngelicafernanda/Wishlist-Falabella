//key
import React from "react";
import { Link } from "react-router-dom";

const MenuAside = () => {
  let sidebarNavItems = [
    {
      display: "Mis datos personales",
      icon: <i className="bx bx-home grid-cols-3"></i>,
      to: "/mi_datos_personales", // aca va la rendireccion
      section: "/mi_datos_personales",
    },
    {
      display: "Mis compras",
      icon: <i className="bx bx-star"></i>,
      to: "/Mis compras",
      section: "Mis compras",
    },
    {
      display: "Mis lista",
      icon: <i className="bx bx-calendar"></i>,
      to: "/lista",
      section: "lista",
    },
    {
      display: "Mis direcciones",
      icon: <i className="bx bx-calendar"></i>,
      to: "/Mis direcciones",
      section: "cMis direcciones",
    },
    {
      display: "Mis medios de pago",
      icon: <i className="bx bx-calendar"></i>,
      to: "/Mis medios de pago",
      section: "Mis medios de pago",
    },
    {
      display: "Mis Gift cards",
      icon: <i className="bx bx-calendar"></i>,
      to: "/Mis Gift cards",
      section: "Mis Gift cards",
    },
    {
      display: "Cambiar mi contraseña",
      icon: <i className="bx bx-calendar"></i>,
      to: "/calendar",
      section: "calendar",
    },
    {
      display: "Cerrar sesion",
      icon: <i className="bx bx-calendar"></i>,
      to: "/calendar",
      section: "calendar",
    },
  ];
  return (
    <>
      <div className="grid  gap-auto   left-0 h-screen  border-2 m-auto max-h-full  ">
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div className=" hove peer-invalid:visible text-pink-300 text-sm ">
              <div className="flex items-center place-content-start  p-8 text-sm font-medium ease-in-out duration-300 transition-colors ">
                <div className="mr-1">
                  <i>{item.icon}</i>
                </div>
                <div>{item.display}</div>
                <div>=</div>
                {/* // icono back  */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default MenuAside;
