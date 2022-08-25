//la que termine primero

import React, { useState, useContext } from 'react';
import trash from '../images/trash.png';
import { Popup } from '../components/Popup';

export function ListProduct({ product, listId, deleteFunction }) {
	const [popUpDeleteProduct, setPopUpDeleteProduct] = useState(false);

	return (
		<>
			<div
				key={product.productId}
				className="grid grid-cols-productList items-center border-b border-slate-300 p-4 gap-4 h-[127px]"
			>
				<img src={product.images[0]} alt="" className="w-[70px] h-auto" />
				<div className="flex flex-col justify-center  ">
					<p className=" text-[10px] text-linea">{product.brand}</p>
					<p className="text-[13px] text-inputFooter w-[150px]">
						{product.name}
					</p>
				</div>
				<p className="text-[16px] font-bold text-inputFooter">
					${product.offerings[0].price.toLocaleString('de-DE')}
				</p>
				<button className="btn-gray w-[200px] justify-self-end h-10 shadow-2xl px-10 m-0">
					Agregar al carro	
				</button>
				<button
					className="justify-self-end w-auto p-[10px]"
					onClick={() => {
						setPopUpDeleteProduct(true);
					}}
				>
					<img className="w-4" src={trash} />
				</button>
			</div>
			<Popup
				trigger={popUpDeleteProduct}
				setTrigger={setPopUpDeleteProduct}
				title={'Eliminar producto'}
				desc={'Estás a punto de elimnar un producto de la lista'}
				btnName={'Aceptar'}
				product={product}
				id={listId}
				clickFunction={deleteFunction}
			/>
		</>
	);
}
