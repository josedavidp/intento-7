import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '/src/informacion/NavBar';
import Seccion1 from '/src/informacion/Seccion1';
import Objetivos from '/src/informacion/Objetivos';
import Ingreso from '/src/informacion/Ingreso';
import Registro from '/src/informacion/Registro';
import Seccion2 from '/src/informacion/Seccion2';
import Seccion3 from '/src/informacion/Seccion3';
import Dashboard from '../Cursos/Page/Dashboard';



const Rutas = () => {
    return (
        <Router>
            {/* NavBar dentro de Routes para envolver solo las rutas específicas */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavBar />
                            <Seccion1 />
                        </>
                    }
                />
                <Route
                    path="/objetivos"
                    element={
                        <>
                            <NavBar />
                            <Objetivos />
                        </>
                    }
                />
                <Route
                    path="/ingreso"
                    element={
                        <>
                            <NavBar />
                            <Ingreso />
                        </>
                    }
                />
                <Route
                    path="/registro"
                    element={
                        <>
                            <NavBar />
                            <Registro />
                        </>
                    }
                />
                <Route
                    path="/conoceMas"
                    element={
                        <>
                            <NavBar />
                            <Seccion2 />
                        </>
                    }
                />
                <Route
                    path="/queBuscamos"
                    element={
                        <>
                            <NavBar />
                            <Seccion3 />
                        </>
                    }
                />
                {/* Dashboard fuera del NavBar */}
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default Rutas;
