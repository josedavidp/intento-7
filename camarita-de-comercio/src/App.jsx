import { useState } from 'react'
import  Cursos  from './informacion/Cursos'
import NavBar from './informacion/NavBar'
import Seccion1 from './informacion/Seccion1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <NavBar/>
       <Seccion1/>
       <Cursos/>
    </>
  )
}

export default App
