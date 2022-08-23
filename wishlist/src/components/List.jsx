//trini (con ange)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {CountProducts} from '../components/CountProducts';

export function List({ list }) {
	const navigate = useNavigate();
	console.log(list.name);
	list.products.map((product) => {
		console.log(product);
	});

	return (
		<div
			onClick={() => {
				navigate('/Lista-detalle');
			}}
		>
			<CountProducts
				nameList={list.name}
				productCounter={list.products.length}
				imgProduct={list.products.map((product) => product.images[0])}
			/>
		</div>
	);
}
