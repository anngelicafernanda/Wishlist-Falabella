import React, { useState, createContext } from 'react';
import { db } from '../firebase/config'
import { collection, query, onSnapshot, orderBy, updateDoc, getDoc, doc, arrayUnion } from 'firebase/firestore'

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {

    const [lists, setLists] = useState([]);

    const getLists = () => {
        const q = query(collection(db, 'lists'), orderBy('date', 'desc'));
        onSnapshot(q, (data) => {
            return setLists(data.docs.map((list) => {
                return ({ ...list.data(), docId: list.id })
            }))
        })
        console.log(lists)
    };

    const updateList = async (id, product) => {
        updateDoc(doc(db, "lists", id), {
            products: arrayUnion(product)
        })
    }

    return (
        <ListContext.Provider value={{
            lists,
            getLists,
            updateList
        }}>
            {children}
        </ListContext.Provider>
    )
}
