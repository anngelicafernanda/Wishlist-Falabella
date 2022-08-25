//ange
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo.svg';
import search from '../images/search.png';
import menu from '../images/menu.png';
import CarHeader from '../imgFalabella/CarHeader';
import LocationOrange from '../imgFalabella/LocationOrange';
import Search from '../imgFalabella/search';

export function Header() {
	return (
		<header className="">
			<div className="bg-orange h-[70px] grid grid-flow-col auto-cols-menu text-white">
				<div className="bg-orangeFalabella h-[70px] rounded-r-full grid place-content-center pl-[48px] pr-[24px]">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<button
					className="ml-[40px] mr-[30px] font-bold grid grid-flow-col place-content-center text-[22px]"
					type="button"
				>
					<img src={menu} alt="" className="w-[32px] h-auto mr-[10px]" />
					Menú
				</button>
				<div className="grid grid-flow-col place-content-center auto-cols-search relative">
					<select
						name="search"
						id="search"
						value="Todas"
						className="bg-gray-search rounded-l-full text-search-font px-[15px]"
					>
						<option value="Todas">Todas</option>
					</select>
					<input
						type="text"
						className="h-[46px] rounded-r-full text-black pl-[15px] pr-[61px]"
					/>
					<button
						type="button"
						className="rounded-full bg-search-font w-[46px] h-[46px] grid place-content-center absolute top-[12px] right-0 "
					>
						<Search />
					</button>
				</div>
				<div className="grid place-content-center auto-cols-max text-[19px] leading-[16px] ml-[30px] border-r my-[12px] pr-[30px]">
					<p className="font-bold">Hola</p>
					<p className="grid grid-flow-col place-content-center items-center">
						Inicia sesión
						<img className="ml-[15px]" src="" alt="" />
					</p>
				</div>
				<div className="grid place-content-center auto-cols-max text-[19px] leading-[16px] ml-[30px] pr-[50px] border-r my-[12px]">
					<Link to="/Mis-listas">
						<p className="font-bold">Mis</p>
						<p className="">Listas</p>
					</Link>
				</div>
				<div className="grid place-content-center auto-cols-max text-[19px] leading-[16px] ml-[30px] pr-[50px] my-[12px]">
					<CarHeader />
				</div>
			</div>
			<div className="bg-white h-[50px] grid grid-flow-col place-content-center shadow-sm justify-between">
				<div className="grid grid-flow-col place-content-center ml-[40px]">
					<LocationOrange />
					<p className="pl-[15px]">
						Entrega en <span className="font-bold">Providencia</span>
					</p>
				</div>
				<div className="grid grid-flow-col place-content-center mr-[40px] gap-[15px]">
					<p>Vende con nosotros</p>
					<p>Fpay</p>
					<select value="Tarjeta CMR" name="item-menu-1" id="item-menu-1">
						<option value="Tarjeta CMR">Tarjeta CMR</option>
					</select>
					<select value="Ayuda" name="item-menu-2" id="item-menu-2">
						<option value="Ayuda">Ayuda</option>
					</select>
				</div>
			</div>
		</header>
	);
}
