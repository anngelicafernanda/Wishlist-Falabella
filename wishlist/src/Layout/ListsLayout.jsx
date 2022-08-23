import { Outlet } from 'react-router-dom';
const ListsLayout = () => {
	return (
		<main className="container max-w-[1280px] mx-auto grid gap-[20px] py-[30px] bg-body">
			<div className="bg-white shadow-sm h-[102px]">Usuario</div>
			<div className="grid gap-[20px] grid-flow-col auto-cols-lists-layout">
				<div className="bg-white shadow-sm w-[321px] h-[559px]">Menú</div>
				<div className="bg-white shadow-sm p-[20px]">
					<Outlet />
				</div>
			</div>
		</main>
	);
};

export default ListsLayout;
