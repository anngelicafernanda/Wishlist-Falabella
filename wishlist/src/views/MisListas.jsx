//ange: Declaración de clases tailwind

import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { List } from '../components/List';
import { Timestamp, addDoc, collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import {db} from '../firebase/config'
import { ListContext } from '../context/ListContext';


export function MisListas() {
    const navigate = useNavigate();
    const { lists, getLists } = useContext(ListContext);

    useEffect(()=>{
        getLists()
    },[])

    const navigateListaDetalle=()=>{
        navigate('/Lista-detalle')
    }

    const createList = (name) => {
            addDoc(collection(db, 'lists'), {
                date: Timestamp.fromDate(new Date()),
                name: name,
                products: [],
                userId: 'JuanaPerez1234'
            })
    }

  return (
    <>
    <button onClick={navigateListaDetalle} className='bg-orange-500'>Mis Listas</button>
    <button onClick={()=>{createList('Cumpleaños')}}>Crear Lista</button>
    <div>
        {lists.map((list)=>
        <List list={list} />
        )}
    </div>
    </>
  )
}
