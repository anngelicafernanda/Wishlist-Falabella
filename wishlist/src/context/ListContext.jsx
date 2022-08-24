import React, { useState, createContext } from 'react';
import { db } from '../firebase/config'
import { collection, query, onSnapshot, orderBy, updateDoc, getDoc, doc, arrayUnion, arrayRemove, deleteDoc, Timestamp, addDoc} from 'firebase/firestore'

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {

    const [lists, setLists] = useState([]);
    const [list, setList] = useState([]);

    const createList = (name) => {
		addDoc(collection(db, 'lists'), {
			date: Timestamp.fromDate(new Date()),
			name: name,
			products: [],
			userId: 'JuanaPerez1234',
            productsId: []
		});
	};

    const createListfromProduct = async (name, product) => {
		await addDoc(collection(db, 'lists'), {
			date: Timestamp.fromDate(new Date()),
			name: name,
			products: [],
			userId: 'JuanaPerez1234',
            productsId: []
		}).then((response)=>{
            updateDoc(doc(db, "lists", response.id), {
                products: arrayUnion(product),
                productsId: arrayUnion(product.productId)
            })
        })
	};

    const getLists = () => {
        const q = query(collection(db, 'lists'), orderBy('date', 'desc'));
        onSnapshot(q, (data) => {
            return setLists(data.docs.map((list) => {
                return ({ ...list.data(), docId: list.id })
            }))
        })
    };

    const getList = async (id) => {
        const result = await getDoc(doc(db, "lists", id));
        return setList({...result.data(), docId : result.id})
    };

    const addProduct = (id, product, productId) => {
        updateDoc(doc(db, "lists", id), {
            products: arrayUnion(product),
            productsId: arrayUnion(productId)
        })
    }

    const deleteProduct = (id, product, productId) =>{
        console.log(product)
        updateDoc(doc(db, "lists", id), {
            products: arrayRemove(product),
            productsId: arrayRemove(productId)
        });

    }

    const deleteList = (id) =>{
        deleteDoc(doc(db, "lists", id));
    }

    const editList = (id, name) =>{
        updateDoc(doc(db, "lists", id), {
            name
        });
    }

    return (
        <ListContext.Provider value={{
            lists,
            getLists,
            list,
            getList,
            addProduct,
            deleteProduct,
            deleteList,
            editList,
            createList,
            createListfromProduct
        }}>
            {children}
        </ListContext.Provider>
    )
}
