//la que termine primero

import React, { useState, useContext } from 'react';
import trash from '../images/trash.png';
import { Popup } from '../components/Popup';
import { ListContext } from '../context/ListContext';
import ActionButton from './ActionButton';
import { Link } from 'react-router-dom';

export function ListProduct({ product, listId, deleteFunction }) {
	const [popUpDeleteProduct, setPopUpDeleteProduct] = useState(false);

	return (
		<>
			<div
				key={product.productId}
				className="rounded border border-slate-300 h-[126px] mt-4 p-4 flex justify-between"
			>
				<div className="flex justify-between justify-center  w-[300px] h-auto">
					<img src={product.images[0]} alt="" className="w-auto h-auto" />

					<div className="flex flex-col justify-center  ">
						<p className=" text-[10px] text-linea">{product.brand}</p>
						<p className="text-[13px] text-inputFooter w-[150px]">
							{product.name}
						</p>
					</div>
					<p className="text-[13px] text-inputFooter w-auto h-[100px]  ">
						{product.offerings[0].price.toLocaleString('de-DE')}
					</p>
				</div>
				<div className="">
					<ActionButton
						title="Agregar al carro"
						className="btn-gray w-[257px] p-[10px]"
					/>
					<button
						className="justify-self-end w-auto p-[10px]"
						onClick={() => {
							setPopUpDeleteProduct(true);
							console.log(product);
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
			</div>
		</>
	);
}
