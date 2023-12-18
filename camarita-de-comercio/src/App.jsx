import React from 'react'
import Rutas from './Ruta/Rutas'
// import { Route } from 'react-router-dom'


/*import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './index.css';


import Dashboard from './Cursos/Page/Dashboard';*/
// AQUI PRUEBA LAS NUEVAS CARPETAS QUE HICE 

// ------------------------------------------------------------------
// import Footer from './informacion/Footer';
// npm install react-reveal --legacy-peer-deps
// ya esta tu footer solo actualiza la info, lo malo que me toco usar esa linea de codigo y no se si estara bien porque cambia unas configuraciones
// https://github.com/19smabtahinoor/Phami-Pharma-ReactJS/blob/main/src/components/Footer/Footer.js
 // ------------------------------------------------------------------

  // ------------------------------------------------------------------
//import AboutUs from './Cursos/MisCursos/AboutUs';
// el aboutUs es para la sección de los cursos veras que usas un Json usas el aboutUs.json https://red-onion-restaurant-41dbe.web.app  
// https://github.com/19smabtahinoor/Red-Onion-ReactJS/tree/master
 // ------------------------------------------------------------------


// https://github.com/Osalumense/mld Te puede servir


function App() {

  /*const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change
*/


 /* return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
  */
 return <Rutas/>

 // return <AboutUs />;
 // return <Footer/>

 
}

export default App
