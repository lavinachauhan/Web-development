import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  return (
   <div>
    <Button incrementCount = {handleClick} text = "click me">
      <h1>
        {count}
      </h1>

    </Button>
    {/* <Card name = "Lavina Chauhan">
      {/* in dono tags ke bich jitna bhi content 
      hai use kehte h children, yha h1, p tags aur 
      unka content children hai*/}
      {/* <h1>Best Web dev course</h1>
      <p>Trying to be consistent in this</p>
      <p>Will complete the course soon</p>
    </Card> */}
    {/* tag ke andr likha hua print nhi hoga
    kyoki tag ke bich mai already ek children likha hua hai
    bich wale children ne andr wale children ko overwrite
    kr diya hai */}
    {/* <Card children = "Hello ji I'm the children">
      Heloo je this is another children
    </Card> */} 

   </div>
        
  )
}

export default App
