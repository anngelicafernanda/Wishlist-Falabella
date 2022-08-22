//traer fotos: trini
//estilo foto: ange y key

import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { ListContext } from '../context/ListContext';


export function Catalogo() {

    const [products, setProducts] = useState([]);
    const { lists, getLists } = useContext(ListContext);

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

     const addProduct = (product) =>{

     }


  return (
    <div>Catalogo
        <Link className='bg-orange-500' to="/Mis-Listas">Mis Listas</Link>
        {products.map((p)=>
        <>
            <img src={p.images[0]}></img>
            {lists.map((list)=>
                <button onClick={()=>{addProduct(p)}}>{list.name}</button>
            )}
            
        </>
        )}  
    </div> 
  )
}
