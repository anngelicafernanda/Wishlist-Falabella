import React, { useState, useEffect, useContext } from "react";
import { List } from "../components/List";
import { ListContext } from "../context/ListContext";
import { Popup } from "../components/Popup";
import { InformationCard } from "../components/InformationCard";

export function MisListas() {
  const { lists, getLists, createList } = useContext(ListContext);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    getLists();
  }, []);

  const handleCreateList = (name, status) => {
    createList(name, status);
  };

  return (
    <>
      {lists.length === 0 && (
        <>
          <div className="grid gap-10 grid-cols-2 grid-rows-2 ">
            <div>
              <h1 className="text-[24px] text-[#333333]">Mis Listas</h1>
              <p className="text-[16px] text-[#333333]">
                ¡Crea y modifica listas con tus productos favoritos de
                Falabella.com!
              </p>
            </div>
            <div>
              <button
                className="btn-orange text-[19px]"
                onClick={() => setPopUp(true)}
              >
                Crear Lista+
              </button>
            </div>
            <InformationCard
              icon={<img></img>}
              title="Organiza/ Ahorra tiempo"
              description="Podrás tener a la mano los productos que desees"
            />
            <InformationCard
              icon={<img></img>}
              title="Regala"
              description="Crea listas especiales para regalar a tus más cercanos"
            />
          </div>
        </>
      )}
      {lists.length !== 0 && (
        <>
          <div className="w-[240px]">
            <button className="btn-orange" onClick={() => setPopUp(true)}>
              Crear Lista+
            </button>
          </div>
          <h2 className="text-color-listTitle text-[14px]">Mis Listas</h2>

          <div>
            {lists.map((list) => (
              <List key={list.docId} list={list} />
            ))}
          </div>
        </>
      )}
      {popUp && (
        <Popup
          trigger={popUp}
          setTrigger={setPopUp}
          title={"Nueva lista"}
          desc={"Dale nombre a tu lista"}
          btnName={"Crear lista"}
          alert="Su lista fue creada exitosamente"
          clickFunction={handleCreateList}
        />
      )}
    </>
  );
}
