import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Envoiemessage from './Envoiemessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <p className='titre'> Formulaire d'envoie Message</p>
     <Envoiemessage/>
    </div>
  )
}

export default App
