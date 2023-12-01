import React from 'react';
import Logo from '/src/images/logo_azul.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar bg-blue">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="#">Conoce más</Link></li>
                        <li><Link to="#">¿Qué buscamos?</Link></li>
                        <li><Link to="/objetivos">Nuestros Objetivos</Link></li>
                        <li><Link to="/cursos">Cursos</Link></li>
                        <li><Link to="/ingreso">Ingresar</Link></li>
                    </ul>
                </div>
                <a href="/" className="text-2xl font-bold font-serif">
                    <img src={Logo} alt="Logo"/>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex font-thin text-white">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/contact">Conoce más</Link></li>
                    <li><Link to="/banner">¿Qué buscamos?</Link></li>
                    <li><Link to="/objetivos">Objetivos</Link></li>
                    <li><Link to="/cursos">Cursos</Link></li>
                    <li><Link to="/ingreso">Ingresar</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
