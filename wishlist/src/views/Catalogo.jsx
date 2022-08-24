import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ListContext } from '../context/ListContext';
import { Alert } from '../components/Alert';
import MineShaft from '../images/MineShaft.png';

export function Catalogo() {
	const [products, setProducts] = useState([]);
	const { lists, getLists, addProduct } = useContext(ListContext);
	const [isActive, setIsActive] = useState(false);
	const [alert, setAlert] = useState(false);

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

	const handleAddProduct = (list, product) => {
		addProduct(list.docId, product);
		setAlert(true);
		// alert(`Tu producto ha sido agregado a ${list.name}`);
	};

	return (

		<>
			<div className=" bg-body bg-white h-[50px] grid grid-flow-col place-content-center shadow-sm justify-between mt-[5px]">
				<div className="grid grid-flow-col place-content-center ml-[40px]">
					{/* <img src={cart} alt="" className="w-[25px] h-auto " /> */}
					<p>
						<img src={MineShaft} alt="" className="w-[10px] h-auto " />
						Home Poleras
						<span className="font-bold"> Poleras LED</span>
					</p>
				</div>
			</div>

			<div className="container max-w-[1280px] mx-auto gap-[10px] py-[20px] bg-white h-[120px] mt-[5px]">
				<div className=" w-[250px] h-[50px] p-[10px]  ">
					<h2>Ordenar por:</h2>
					<select className="  m-[10px]">
						<option className="" value="">
							Recomendados
						</option>
					</select>
				</div>
			</div>
			<main className=" container max-w-[1280px] mx-auto grid grid-cols-4 gap-[15px] py-[30px] bg-body ">
				{products.map((p) => (
					<div
						className=" min-w-[228px] h-auto bg-white overflow-y-hidden"
						key={p.productId}
					>
						<img className="w-full h-auto" src={p.images[0]}></img>
						<div className="p-[10px] relative">
							<p className="bg-marca text-white p-[3px] h-[23px] w-[102px] text-[11px] font-bold text-center absolute left-[0px] top-[-12px]">
								+ SUSTENTABLE
							</p>
							<p className=" text-[13px] font-bold text-marca mt-[15px]">
								{p.brand}
							</p>
							<p className="text-[16px] font-bold text-info ">{p.name}</p>
							<p className="text-[13px] text-falabella">Por Falabella</p>
							<p className="text-[13px] text-falabella">
								${p.offerings[0].price.toLocaleString('de-DE')}
							</p>
							<div className="flex flex-col items-center">
								<button className="btn-orange text-[16px] px-10 mt-[24px] mb-0">
									Agregar al carro
								</button>
								<div className="dropdrown">
									<div
										className="addToList mt-[24px]"
										onClick={(e) => setIsActive(!isActive)}
									>
										Agregar a la Lista
									</div>
									{isActive && (
										<div className="dropdownContent">
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
									)}
								</div>


							</div>
						</div>
					</div>
				))}
				<Alert
					trigger={alert}
					setTrigger={setAlert}
					alert="Su producto fue agregado exitosamente a la lista"
				/>
			</main>
		</>
	);
}

// {lists.map((list)=>
//   <div key={list.docId} onClick={()=>{addProduct(list, p)}}>{list.name}</div>
// )}
