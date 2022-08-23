import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ListContext } from '../context/ListContext';

export function Catalogo() {
	const [products, setProducts] = useState([]);
	const { lists, getLists, addProduct } = useContext(ListContext);

	const getProduct = async () => {
		try {
			const response = await axios.get(
				'https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/wishlist/data-wishlist.json',
			);
			return setProducts(response.data.products);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getProduct();
		getLists();
	}, []);

	const handleAddProduct = (list, product) => {
		addProduct(list.docId, product);
		alert(`Tu producto ha sido agregado a ${list.name}`);
	};

	/* ORDENAR TAILWIND */
	return (
		<main className=" container max-w-[1280px] mx-auto grid grid-cols-4 gap-[15px] py-[30px] bg-body ">
			{products.map((p) => (
				<div
					className=" min-w-[228px] h-auto bg-white overflow-y-hidden"
					key={p.productId}
				>
					<img className="w-full h-auto" src={p.images[0]}></img>
					<div className="p-[10px]">
						<p>+ SUSTENTABLE</p>
						<p className="text-marca">{p.brand}</p>
						<p className="text-info">{p.name}</p>
						<p>Por Falabella</p>
						<p>${p.offerings[0].price.toLocaleString('de-DE')}</p>
						<div className="flex flex-col items-center">
							<button className="btn-orange text-[16px] px-10 mt-0 mb-0">
								Agregar al carro
							</button>
							{/*                             <select name="" id="">
                                <option>Agregar a la lista</option>
                                {lists.map((list)=>
                                    <option key={list.docId} onClick={()=>{handleAddProduct(list, p)}}>{list.name}</option>
                                )}
                            </select> */}
							{lists.map((list) => (
								<div
									key={list.docId}
									onClick={() => {
										handleAddProduct(list, p);
									}}
								>
									{list.name}
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</main>
	);
}

// {lists.map((list)=>
//   <div key={list.docId} onClick={()=>{addProduct(list, p)}}>{list.name}</div>
// )}
