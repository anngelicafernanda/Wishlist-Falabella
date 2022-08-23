import React, {useState, useEffect, useContext} from 'react'
import { List } from '../components/List';
import { Timestamp, addDoc, collection} from 'firebase/firestore';
import {db} from '../firebase/config'
import { ListContext } from '../context/ListContext';
import { Popup } from '../components/Popup'

export function MisListas() {
    const { lists, getLists } = useContext(ListContext);
    const [popUp, setPopUp] = useState(false)

    useEffect(()=>{
        getLists()
    },[])

    const createList = (name) => {
            addDoc(collection(db, 'lists'), {
                date: Timestamp.fromDate(new Date()),
                name: name,
                products: [],
                userId: 'JuanaPerez1234'
            })
            setPopUp(false)
    }

  return (
    <>
    <h4>VISTA Mis Listas</h4>
    <br></br>
    <button onClick={() => setPopUp(true)}>Crear Lista</button>
    <Popup trigger={popUp} setTrigger={setPopUp} title={<h4>Nueva Lista</h4>} desc={<p>Dale nombre a tu lista</p>} btnName={"Crear lista"} clickFunction ={createList} />
    <div>
        {lists.map((list)=>
        <List key={list.docId} list={list} />
        )}
    </div>
    </>
  )
}
