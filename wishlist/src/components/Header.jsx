//ange
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.svg';

export function Header() {
	return (
		<header className="">
			<div className="bg-orange h-[70px] grid grid-flow-col auto-cols-menu text-white">
				<div className="bg-orangeFalabella h-[70px] rounded-r-full grid place-content-center pl-[48px] pr-[24px]">
					<Link to="/">
						<Logo />
					</Link>
				</div>
			</div>
		</header>
	);
}
