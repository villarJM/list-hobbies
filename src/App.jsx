import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "Misael Villar Julian";
  return (
    <div>
      <h1>Lista de Hobbies de {name}</h1>
      <ul>
        <li>Jugar VideoJuegos.</li>
        <li>Programar</li>
        <li>Escuchar Música</li>
        <li>Estudiar</li>
      </ul>
    </div>
  )
}

export default App
