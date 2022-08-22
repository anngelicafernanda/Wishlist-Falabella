//ange
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.svg';

export function Header() {
	return (
		<header className="">
			<div className="bg-orange h-[70px] grid grid-flow-col auto-cols-menu text-white">
				<div className="bg-orangeFalabella h-[70px] rounded-r-full grid place-content-center pl-[48px] pr-[24px]"></div>
				<Link to="/">
					<Logo />
				</Link>
			</div>
			<button
				className="ml-[40px] mr-[30px] font-bold grid grid-flow-col place-content-center text-[22px]"
				type="button"
			>
				{/* aqui va un imagen */}
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
					className="rounded-full bg-search-font w-[46px] h-[46px] gird place-content-center absolute top-[12px] right-0"
				>
					{/* aqui va una imagen  */}
				</button>
				<div className="grid place-content-center auto-cols-max text-[19px] leading-[16px] ml-[30px] border-r my-[12px] pr-[30px]">
					<p className="font-bold">Hola</p>
					<p className="grid grid-flow-col place-content-center items-center">
						Inicia Sesión
						{/* aqui va una imagen */}
					</p>
				</div>
				<div className="grid place-content-center auto-cols-max text-[19px] leading-[16px] ml-[30px] pr-[50px] border-r my-[12px]">
					<Link to="/Mis-Listas">
						<p className="font-bold">Mis</p>
						<p className="">Listas</p>
					</Link>
				</div>
				<div className="grid place-content-center auto-cols-max text-[19px] leading-[16px] ml-[30px] pr-[50px] my-[12px]">
					{/* aqui va una imagen */}
				</div>
			</div>
		</header>
	);
}
