import React, {useState, useContext, useEffect} from 'react'
import { Link, useLocation} from 'react-router-dom'
import { Popup } from '../components/Popup'
import { ListContext } from '../context/ListContext';
import {ListProduct} from '../components/ListProduct'

export function ListaDetalle() {
    const {state} = useLocation();
    const { editList, deleteList, getList, list, deleteProduct } = useContext(ListContext);
    const [popUpEdit, setPopUpEdit] = useState(false);
    const [popUpDeleteList, setPopUpDeleteList] = useState(false);

    useEffect(()=>{
        getList(state.list.docId);
    },[])

    const handleEditList = (name, status) =>{
        console.log(status)
        editList(state.list.docId, name, status);
        getList(state.list.docId);
    }

    const handleDeleteProduct = (id, product, productId) =>{
        deleteProduct(id, product, productId);
        getList(id);          
    }
    
    return (     
        <>
        <div>
            <div className='flex justify-between mb-20'>
                <Link className='text-xs' to="/Mis-Listas">Volver a Mis Listas</Link> 
                {state.list.products.length != 0&&  
                <button className='btn-orange w-[200px] text-[14px] h-10 p-0 m-0'>    
                        <Link className='text'to="/">Agrega productos a la lista</Link>
                    </button> }
            </div>
            <div className='flex justify-between'>
                <div className='flex '>
                    <h1 className='font-bold mr-5'>{list.name}</h1>
                    <button onClick={()=>(setPopUpEdit(true))} className='text-xs'>Editar</button>
                </div>
                <div className='flex'>
                    <button onClick={()=>(setPopUpDeleteList(true))} className='text-xs justify-self-end self-end'>Eliminar lista</button>
                </div>
            </div>
            <p className="text-xs">{list.status}</p>
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
        <Popup 
            trigger={popUpDeleteList} 
            setTrigger={setPopUpDeleteList} 
            title={'Eliminar lista'} 
            desc={<p>Estás a punto de eliminar la lista</p>} 
            btnName={"Aceptar"} 
            id={state.list.docId} 
            clickFunction ={deleteList}
            alert={"Easdadasdasdasdasd"}
        /> 
        <Popup trigger={popUpEdit} 
        setTrigger={setPopUpEdit} 
        title={"Editar lista"} 
        btnName={"Aceptar"} 
        clickFunction ={handleEditList} 
        nameList={list.name}
        alert={"Lista editada"}
        />
        </>
    )
}
{/* <Popup 
trigger={popUpDeleteList} 
setTrigger={setPopUpDeleteList} 
title={'Eliminar lista'} 
desc={<p>Estás a punto de eliminar la lista</p>} 
btnName={"Aceptar"} 
id={state.list.docId} 
clickFunction ={deleteList}
alert={"E"}
/> */}