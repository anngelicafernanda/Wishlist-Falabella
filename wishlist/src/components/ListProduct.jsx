//la que termine primero

import React, {useState, useContext} from 'react';
import trash from '../images/trash.png';
import { Popup } from '../components/Popup';
import { ListContext } from '../context/ListContext';

export function ListProduct({product, listId, deleteFunction}) {
  const [popUpDeleteProduct, setPopUpDeleteProduct] = useState(false);

  return (
    <div key={product.productId} className="flex p-2 items-center w-3/4">
      <img src={product.images[0]} className="w-14 mr-5"></img>
      <div className="flex flex-col">
        <p className="text-xs">{product.brand}</p>
        <p className="text-sm">{product.name}</p>
      </div>
      <button className='justify-self-end w-auto' onClick={()=>{setPopUpDeleteProduct(true); console.log(product)}}>
        <img className='w-4' src={trash}/>
      </button>
      <Popup trigger={popUpDeleteProduct} setTrigger={setPopUpDeleteProduct} title={'Eliminar producto'} desc={<p>Estás a punto de elimnar un producto de la lista</p>} btnName={"Aceptar"} product={product} id={listId} clickFunction ={deleteFunction}/>
    </div>
  )
}
