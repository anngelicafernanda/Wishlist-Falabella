//traer fotos: trini
//estilo foto: ange y key

import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { ListContext } from '../context/ListContext';


export function Catalogo() {

    const [products, setProducts] = useState([]);
    const { lists, getLists, updateList } = useContext(ListContext);

    const getProduct = async () => {
     try {
       const response = await axios.get('https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/wishlist/data-wishlist.json');
       return setProducts(response.data.products)
     } catch (error) {
       console.error(error);
     }
   }
   
     useEffect(()=>{
       getProduct();
       getLists();
     },[]) 

     const addProduct = (list, product) =>{
        updateList(list.docId, product);
        alert(`Tu producto ha sido agregado a ${list.name}`)
     }


  return (
    <div>
        <div>VISTA CATÁLOGO</div>
        <Link className='bg-orange-500' to="/Mis-Listas">Mis Listas</Link>
        {products.map((p)=>
        <div key={p.productId}>
            <img src={p.images[0]}></img>
            {lists.map((list)=>
                <div key={list.docId} onClick={()=>{addProduct(list, p)}}>{list.name}</div>
            )}
            
        </div>
        )}  
    </div> 
  )
}
