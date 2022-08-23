import { Outlet } from 'react-router-dom';
import MenuAside from '../components/MenuAside';
import imgUser from '../images/imgUser.png';
const ListsLayout = () => {
	return (
		<main className="container max-w-[1280px] mx-auto grid gap-[20px] py-[30px] bg-body">
			<div className="bg-white shadow-sm h-[102px] flex p-[20px] pl-[60px]">
				<img src={imgUser} alt="" className="w-auto h-[60px] p-[5px]" />
				<div className="p-[5px]">
					<h2 className="font-bold text-[14px]">Bienvenid@</h2>
					<h1 className="font-bold text-[25px]">Nicolas Hernandez</h1>
				</div>
			</div>
			<div className="grid gap-[20px] grid-flow-col auto-cols-lists-layout">
				<div className="bg-white shadow-sm w-[321px] h-[559px]">
					<MenuAside />
				</div>
				<div className="bg-white shadow-sm p-[20px]">
					<Outlet />
				</div>
			</div>
		</main>
	);
};

export default ListsLayout;
