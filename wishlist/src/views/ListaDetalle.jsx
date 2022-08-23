//key
import React, {useState, useContext, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Popup } from '../components/Popup'
import { ListContext } from '../context/ListContext';
import trash from '../images/trash.png'

export function ListaDetalle() {
    const {state} = useLocation();
    const { getLists, deleteProduct, editList } = useContext(ListContext);
    const [popUp, setPopUp] = useState(false);
    const [popUpEdit, setPopUpEdit] = useState(false);
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
                <Link className='text-s bg-gray-ligth' to="/">Agregar productos a la lista</Link>
            </div>
            <Popup trigger={popUpEdit} setTrigger={setPopUpEdit} title={<h4>Editar Lista</h4>} btnName={"Aceptar"} clickFunction ={handleEditList}/>
            <div className='flex p-5 '>
                <div className='font-bold mr-5'>{state.list.name}</div>
                <button onClick={()=>(setPopUpEdit(true))} className='text-xs'>Editar</button>
            </div>
            <Popup trigger={popUp} setTrigger={setPopUp} title={<h4>Eliminar Producto</h4>} desc={<p>Estas apunto de elimnar un producto de la lista</p>} btnName={"Aceptar"} clickFunction ={setConfirm}/>
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
        </div>
    )
}
