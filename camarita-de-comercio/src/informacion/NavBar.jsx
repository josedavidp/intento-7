import React from 'react';
import Logo from '../../public/logo_azul.png';

const Navbar = () => {

    return (
        <div className="navbar bg-blue">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="#">Conoce más</a></li>
                        <li><a href="#">¿Qué buscamos?</a></li>
                        <li><a href="#">Nuestros Objetivos</a></li>
                        <li><a href="#">Cursos</a></li>
                        <li><a href="#">Ingresar</a></li>
                    </ul>
                </div>
                <a href="/" className="text-2xl font-bold font-serif">
                    <img src={Logo} alt="Logo"/>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex font-thin text-white">
                <ul className="menu menu-horizontal p-0">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/contact">Conoce más</a></li>
                    <li><a href="/banner">¿Qué buscamos?</a></li>
                    <li><a href="/info">Objetivos</a></li>
                    <li><a href="/services">Cursos</a></li>
                    <li><a href="/login">Ingresar</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
