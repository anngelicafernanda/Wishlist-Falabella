//key
import React from "react";
import { Link } from "react-router-dom";

const MenuAside = () => {
  let sidebarNavItems = [
    {
      display: "Mis datos personales",
      icon: <i className="bx bx-home"></i>,
      to: "/mi_datos_personales", // aca va la redireccion
      section: "/mi_datos_personales",
    },
    {
      display: "Mis compras",
      icon: <i className="bx bx-star"></i>,
      to: "/started",
      section: "started",
    },
    {
      display: "Mis lista",
      icon: <i className="bx bx-calendar"></i>,
      to: "/calendar",
      section: "calendar",
    },
    {
      display: "Mis direcciones",
      icon: <i className="bx bx-calendar"></i>,
      to: "/calendar",
      section: "calendar",
    },
    {
      display: "Mis medios de pago",
      icon: <i className="bx bx-calendar"></i>,
      to: "/calendar",
      section: "calendar",
    },
    {
      display: "Mis Gift cards",
      icon: <i className="bx bx-calendar"></i>,
      to: "/calendar",
      section: "calendar",
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
      <div className="flex flex-col top-15 left-0 h-screen w-80 border-2 m-10 w-80 h-screen ">
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div className="relative ">
              <div className="flex items-center place-content-start  p-8 text-sm font-medium ease-in-out duration-300 transition-colors ">
                <div className="mr-4">
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
