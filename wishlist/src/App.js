import './index.css';
import {Routes, Route} from "react-router-dom";
import { MainLayout } from './Layout/MainLayout';
import { Catalogo } from './views/Catalogo';
import { MisListas } from './views/MisListas';
import { ListaDetalle } from './views/ListaDetalle';

export function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Catalogo />}/>
        <Route path="/Mis-Listas" element={<MisListas />}/>
        <Route path="/Lista-detalle" element={<ListaDetalle />}/>
      </Routes>
    </MainLayout>
  );
}
