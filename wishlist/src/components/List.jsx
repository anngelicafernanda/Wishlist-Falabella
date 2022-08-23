//trini (con ange)
import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { ListContext } from '../context/ListContext';
//import {CountProducts} from '../components/CountProducts';
import trash from '../images/trash.png'

export function List({ list }) {
	const navigate = useNavigate();
  const { lists, getLists, deleteList } = useContext(ListContext);

  const navigateListDetails = () =>{
    navigate(`/Mis-Listas/${list.name}`, { state: { list } })
  }

  console.log(list.products.images)

	return (
		  <div className="rounded border border-slate-300 h-[126px] mt-4 p-4">
			  <h1 onClick={navigateListDetails} className="text-black font-bold text-[18px]">
				  {list.name} ({list.products.length})
			  </h1>
			  <div className="text-black flex justify-between items-center">
				  <div className="flex ">
					  {list.products.length === 0 && (
						  <h3 className="pt-4 text-black text-[14px]">No hay productos en esta lista</h3>
					  )}
            {list.products.map((product)=>
            	<div className="icon pt-4 bg-container">
                <img src={product.images[0]} alt="" className="w-[47px] h-auto" />
              </div>
            )}
				  </div>
				  <img onClick={()=>{deleteList(list.docId)}} src={trash} alt="Eliminar" className="w-[20px] h-auto" />
			  </div>
		  </div>
	);
}
