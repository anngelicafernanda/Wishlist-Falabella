//traer fotos: trini
//estilo foto: ange y key

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


export function Catalogo() {

    const [products, setProducts] = useState([])

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
     },[]) 


  return (
    <div>Catalogo
         <Link className='bg-orange-500' to="/Mis-Listas">Mis Listas</Link>
         {
       products.map((p)=>
        <img src={p.images[0]}></img>
      )}  
    </div> 
  )
}
