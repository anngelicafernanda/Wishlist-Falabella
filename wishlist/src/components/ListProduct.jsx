import React, { useState } from 'react';
import trash from '../images/trash.png';
import { Popup } from '../components/Popup';
import ActionButton from './ActionButton';

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
					{product.offerings[0].price.toLocaleString('de-DE')}
				</p>
				<ActionButton
					title="Agregar al carro"
					className="btn-gray w-[257px] justify-self-end m-0"
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
		</>
	);
}
