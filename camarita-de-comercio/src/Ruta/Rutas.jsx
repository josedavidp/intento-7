import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '/src/informacion/NavBar';
import Seccion1 from '/src/informacion/Seccion1';
import Objetivos from '/src/informacion/Objetivos';
import Ingreso from '/src/informacion/Ingreso';
import Registro from '/src/informacion/Registro';

const Rutas = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Seccion1 />} />
                <Route path="/objetivos" element={<Objetivos/>} />
                <Route path="/ingreso" element={<Ingreso />} />
                <Route path="/registro" element={<Registro />} />
            </Routes>
        </Router>
    );
}

export default Rutas;
