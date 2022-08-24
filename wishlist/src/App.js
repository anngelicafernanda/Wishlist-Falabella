import './index.css';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './Layout/MainLayout';
import { Catalogo } from './views/Catalogo';
import { MisListas } from './views/MisListas';
import { ListaDetalle } from './views/ListaDetalle';
import { ListContextProvider } from './context/ListContext';
import ListsLayout from './Layout/ListsLayout';

export function App() {
	return (
		<ListContextProvider>
			<MainLayout>
				<Routes>
					<Route path="/" element={<Catalogo />} />
					<Route path="/Mis-Listas" element={<ListsLayout />}>
						<Route index element={<MisListas />} />
						<Route path=":name" element={<ListaDetalle />} />
					</Route>
				</Routes>
			</MainLayout>
		</ListContextProvider>
	);
}
