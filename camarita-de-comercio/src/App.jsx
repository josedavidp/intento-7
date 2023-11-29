import { useState } from 'react'
import  Cursos  from './informacion/Cursos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Cursos/>
    </>
  )
}

export default App
