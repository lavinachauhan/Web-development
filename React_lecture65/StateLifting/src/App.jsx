import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // create state
  // manage state
  // change state
  // sabhi child me state ko sync krwadenge
  const [name, setName] = useState('');

  return (
    <div>
    <Card title = "card1" name = {name} setName = {setName} ></Card>
    <Card title = "card2" name = {name} setName = {setName} ></Card>

    <p>Name state variable inside parent: {name}</p>
    </div>
  )
}

export default App
