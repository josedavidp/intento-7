import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '/src/informacion/NavBar';
import Seccion1 from '/src/informacion/Seccion1';
import Objetivos from '/src/informacion/Objetivos';
import Ingreso from '/src/informacion/Ingreso';
import Registro from '/src/informacion/Registro';
import Seccion2 from '/src/informacion/Seccion2';
import Seccion3 from '/src/informacion/Seccion3';

const Rutas = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Seccion1 />} />
                <Route path="/objetivos" element={<Objetivos/>} />
                <Route path="/ingreso" element={<Ingreso />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/conoceMas" element={<Seccion2 />} />
                <Route path="/queBuscamos" element={<Seccion3 />} />
            </Routes>
        </Router>
    );
}

export default Rutas;
