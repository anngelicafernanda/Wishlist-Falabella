//key

import React, {useState, useContext, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Popup } from '../components/Popup'
import { ListContext } from '../context/ListContext';
import trash from '../images/trash.png'
import ActionButton from "../components/ActionButton";
import MenuAside from "../components/MenuAside";

export function ListaDetalle() {
    const {state} = useLocation();
    const { getLists, deleteProduct, editList, deleteList } = useContext(ListContext);
    const [popUp, setPopUp] = useState(false);
    const [popUpEdit, setPopUpEdit] = useState(false);
    const [popUpDelete, setPopUpDelete] = useState(false);
    const [confirm, setConfirm] = useState(false);

    useEffect(()=>{
        getLists()
    },[])

    const handleEditList = (name) =>{
        editList(state.list.docId, name)
    }

    const handleDeleteProduct = async (id, product) =>{
        setPopUp(true);
        if(confirm){
            await deleteProduct(id, product);
            setConfirm(false)
        }
    }
    
    return (
        <div>
            <div className='flex justify-between mx-10 my-5'>
                <Link className='text-xs' to="/Mis-Listas">Volver a Mis Listas</Link> 
                <button className='btn-orange bg-btnlista w-[200px] p-0 m-0'>    
                    <Link className='text'to="/">Agregar productos a la lista</Link>
                </button>     
            </div>
            <div className='flex p-5 justify-between mx-10 my-5'>
                <Popup trigger={popUpEdit} setTrigger={setPopUpEdit} title={"Editar lista"} btnName={"Aceptar"} clickFunction ={handleEditList} nameList={state.list.name}/>
                <div className='flex'>
                    <div className='font-bold mr-5'>{state.list.name}</div>
                    <button onClick={()=>(setPopUpEdit(true))} className='text-xs'>Editar</button>
                </div>
                <Popup trigger={popUpDelete} setTrigger={setPopUpDelete} title={'Eliminar lista'} desc={<p>Estás a punto de elimnar la lista</p>} btnName={"Aceptar"} id={state.list.docId} clickFunction ={deleteList}/>
                <div className='flex'>
                    <button onClick={()=>(setPopUpDelete(true))} className='text-xs justify-self-end self-end'>Eliminar lista</button>
                </div>
            </div>
            <Popup trigger={popUp} setTrigger={setPopUp} title={'Eliminar producto'} desc={<p>Estás a punto de elimnar un producto de la lista</p>} btnName={"Aceptar"} clickFunction ={setConfirm}/>
            {state.list.products.map((product)=>
                <div key={product.productId} className="flex p-2 items-center w-3/4">
                    <img src={product.images[0]} className="w-14 mr-5"></img>
                    <div className="flex flex-col">
                        <p className="text-xs">{product.brand}</p>
                        <p className="text-sm">{product.name}</p>
                    </div>
                    <button className='justify-self-end w-auto' onClick={()=>{handleDeleteProduct(state.list.docId, product)}}>
                        <img className='w-4' src={trash}/>
                    </button>
                </div>
            )}
            <div>
        <MenuAside />
        </div>
        </div>
        
    )
}

{/* <div>
ListaDetalle
<Link className="bg-orange-500" to="/">
  Agregar producto
</Link>
<div className="bg-gray-light  sticky w-screen h-screen m-0 border-slate-300    mb-3 mx-8">
  <div className=" font-style::lato text-m content-start font-bold pb-[13px] text-base border-b text-color-border-b flex items-center border-text-color-border-b"> */}
    {/* aqui va un icono back */}
{/*     <p>Volver a mis listas</p>
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
  <div className=" flex justify-between border-b pb-[13px] mt-[21px] border-text-color-border-b">
    <h1>No hay Productos en esta Lista</h1>

    <button className=" flex justify-between border-solid pb-[14px] ">
      <ActionButton
        className="btn-orange text-white text-[14px] "
        title="Agrega productos a la lista"
        callback={alert}
      />
    </button>
  </div>
</div>
</div>
<div>
<MenuAside />
</div>
</>  */}
