import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // early return 
  if(!isLoggedIn){
    return (
      <LoginBtn></LoginBtn>
    )
  }

  // using logical operator
  // return(
  //   <div>
  //     <h1>Welcome everyone</h1>
  //     <div>
  //       {isLoggedIn && <LogoutBtn></LogoutBtn>}
  //     </div>
  //   </div>
  // )

  // using ternary operator
  // return(   
  //   <div>
  //       {isLoggedIn ? <LogoutBtn></LogoutBtn> : <LoginBtn></LoginBtn>}
  //   </div>
  // )



  // using if else
  // if(isLoggedIn){
  //   return (
  //       <LogoutBtn></LogoutBtn>
  //   )
  // }
  // else{
  //   return (
  //       <LoginBtn></LoginBtn>
  //   )
  // }
}

export default App
