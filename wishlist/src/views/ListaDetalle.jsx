import React, {useState, useContext, useEffect} from 'react'
import { Link, useLocation} from 'react-router-dom'
import { Popup } from '../components/Popup'
import { ListContext } from '../context/ListContext';
import {ListProduct} from '../components/ListProduct'
// import { Alert } from '../components/Alert';

export function ListaDetalle() {
    const {state} = useLocation();
    const { editList, deleteList, getList, list, deleteProduct } = useContext(ListContext);
    const [popUpEdit, setPopUpEdit] = useState(false);
    const [popUpDeleteList, setPopUpDeleteList] = useState(false);
    const [alert, setAlert] = useState(false);

    useEffect(()=>{
        getList(state.list.docId);
        console.log(list.products)
    },[])

    const handleEditList = (name) =>{
        editList(state.list.docId, name);
        getList(state.list.docId);
    }
    const handleDeleteProduct = (id, product) =>{
        deleteProduct(id, product);
        getList(id);

        // setAlert(true);
        // setTimeout(() => {
        //   setAlert(false);
        // }, 2500);
    }
    



    return (     
        <div>
            <div className='flex justify-between mb-20'>
                <Link className='text-xs' to="/Mis-Listas">Volver a Mis Listas</Link> 
                {state.list.products.length != 0&&  
                <button className='btn-orange w-[200px] text-[14px] h-10 p-0 m-0'>    
                        <Link className='text'to="/">Agrega productos a la lista</Link>
                    </button> }
            </div>
            <div className='flex justify-between'>
                <Popup trigger={popUpEdit} setTrigger={setPopUpEdit} title={"Editar lista"} btnName={"Aceptar"} clickFunction ={handleEditList} nameList={list.name}/>
                <div className='flex '>
                    <h1 className='font-bold mr-5'>{list.name}</h1>
                    <button onClick={()=>(setPopUpEdit(true))} className='text-xs'>Editar</button>
                </div>
                <Popup 
                  trigger={popUpDeleteList} 
                  setTrigger={setPopUpDeleteList} 
                  title={'Eliminar lista'} 
                  desc={<p>Estás a punto de eliminar la lista</p>} 
                  btnName={"Aceptar"} 
                  id={state.list.docId} 
                  clickFunction ={deleteList}
                  />
                <div className='flex'>
                    <button onClick={()=>(setPopUpDeleteList(true))} className='text-xs justify-self-end self-end'>Eliminar lista</button>
                </div>
            </div>
            
            {list.products != undefined && state.list.products.length != 0?
                list.products.map((product)=>
                    <ListProduct product={product} listId={state.list.docId} deleteFunction={handleDeleteProduct}/>
                )
            :
                <div className=" flex justify-between items-center border-y py-[13px] border-gray-search border-y-2 mt-[21px]">
                    <h1>No hay Productos en esta Lista</h1>
                    <button className='btn-orange bg-btnlista w-[200px] text-[14px] h-10 p-0 m-0'>    
                        <Link className='text'to="/">Agrega productos a la lista</Link>
                    </button> 
                </div>
            }
        </div>
    )
}

{/* <div>

<div className="bg-gray-light  sticky w-screen h-screen m-0 border-slate-300    mb-3 mx-8">
  <div className=" font-style::lato text-m content-start font-bold pb-[13px] text-base border-b text-color-border-b flex items-center border-text-color-border-b"> */}
    /* aqui va un icono back */
/*     <p>Volver a mis listas</p>
  </div>
  <div className="grid grid-flow-col border-b justify-between mt-[70px] pb-[13px] border-text-color-border-b">
    <div className="grid grid-flow-col gap-[15px]">
      <h1 className="font-style:lato font-bold text-base">
        Compras del mes
      </h1>
      <div className="justify-center  space-y-{amount} flex items-center border-text-color-eliminar">
        <p className="font-style:lato text-xstext-base flex-row-reverse underline text-text-color-eliminar">
          Editar
        </p>
      </div>
    </div>
    <p
      className="font-sans text-xstext-base text-color-eliminar text-right mr-8 underline
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
</>  */
