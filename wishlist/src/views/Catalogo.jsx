import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ListContext } from '../context/ListContext';
import MineShaft from '../images/MineShaft.png';
import { Popup } from '../components/Popup';
import RightArrow from '../imgFalabella/RightArrow';
import { Dropdown } from '../components/Dropdown';

export function Catalogo() {
	const { lists, getLists, addProduct, setAlert, setAlertMessage } =
		useContext(ListContext);
	const [products, setProducts] = useState([]);
	const [popUp, setPopUp] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState({});
	const [dropSelect, setDropSelect] = useState('');

	const getProduct = async () => {
		try {
			const response = await axios.get(
				'https://raw.githubusercontent.com/TrinidadMedina/hackathon-laboratoria/main/wishlist/data-wishlist.json',
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

	const handleSelect = (value, p) => {
		if (value === 'crear') {
			setSelectedProduct(p);
			setPopUp(true);
		} else if (value === 'disabled') {
			setAlertMessage('Este producto ya existe en tu lista');
			setAlert(true);
		} else {
			addProduct(value, p, p.productId);
			setAlertMessage('Tu producto a sido añadido a la lista');
			setAlert(true);
		}
	};

	return (
		<>
			<div className="bg-white h-[50px] grid grid-flow-col place-content-center shadow-sm justify-between mt-[5px]">
				<div className="grid grid-flow-col items-center gap-[10px] ml-[120px]">
					<img src={MineShaft} alt="" className="w-[10px] h-auto inline " />
					<p>Home</p>
					<RightArrow className="" />
					<p>Poleras</p>
					<RightArrow className="" />
					<p className="font-bold"> Poleras LED</p>
				</div>
			</div>
			<div className="container max-w-[955px] mx-auto gap-[10px] py-[20px] bg-white h-[120px] mt-[5px]">
				<div className=" w-[250px] h-[50px] p-[10px] ml-[40px]">
					<label
						for="Ordernar"
						className="text-ordenarPor text-[12px] block ml-[15px]"
					>
						Ordenar por:
					</label>
					<select
						id="Ordenar"
						className="border-b m-[10px] mt-[5px] border-b-ordenarPor pb-[10px] w-[250px]"
					>
						<option className="bold text-[14px] text-falabella" value="">
							Recomendados
						</option>
					</select>
				</div>
			</div>
			<main className="container max-w-[955px] mx-auto grid grid-cols-4 gap-[15px] py-[30px] bg-body ">
				{products.map((p) => (
					<div className=" min-w-[228px] h-auto bg-white" key={p.productId}>
						<img
							className="w-[228px] h-[228px] object-cover"
							src={p.images[0]}
						></img>
						<div className="p-[10px] relative">
							<p className="bg-marca text-white p-[3px] h-[23px] w-[102px] text-[11px] font-bold text-center absolute left-[0px] top-[-12px]">
								+ SUSTENTABLE
							</p>
							<p className=" text-[13px] font-bold text-marca mt-[15px]">
								{p.brand}
							</p>
							<p className="text-[16px] font-bold text-info truncate">
								{p.name}
							</p>
							<p className="text-[13px] text-falabella">Por Falabella</p>
							<p className="text-[13px] text-falabella">
								${p.offerings[0].price.toLocaleString('de-DE')}
							</p>
							<div className="flex flex-col items-center ">
								<button className="btn-orange text-[16px] px-10 mt-[24px] mb-0">
									Agregar al carro
								</button>
								<Dropdown
									selected={dropSelect}
									setSelected={setDropSelect}
									lists={lists}
									product={p}
									handleSelect={handleSelect}
								/>
							</div>
						</div>
					</div>
				))}
			</main>
			{popUp && (
				<Popup
					trigger={popUp}
					setTrigger={setPopUp}
					title={'Crear lista'}
					desc={'Dale nombre a tu lista'}
					btnName={'Crear lista'}
					product={selectedProduct}
					alert={'Lista creada'}
				/>
			)}
		</>
	);
}
