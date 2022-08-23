//trini (con ange)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {CountProducts} from '../components/CountProducts';

export function List({ list }) {
	const navigate = useNavigate();
  const navigateListDetails = () =>{
    navigate(`/Mis-Listas/${list.name}`, { state: { list } })
  }

	return (
		<div
			onClick={navigateListDetails}
		>
			<CountProducts
				nameList={list.name}
				productCounter={list.products.length}
				imgProduct={list.products.map((product) => product.images[0])}
			/>
		</div>
	);
}
