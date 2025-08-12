import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function handleClick(){
     alert("Iam clicked")
  }

  function handleMouseOver(){
    alert("Para ke uper mouse lekr aaye h");
  }

  function handleInputChange(e){
      console.log("Value till now: ", e.target.value);
      console.log("Input mai value change hui hai");
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Form Submit krdu kya");
  }
  return (
    
    <div>
      {/* is tarike se nhi krna, is tarike ko kehte h 
      immediate invocation, kyoki is prakar se jaise hi component render hoga
      iske andr likha code invoke ho jaega agr hum chate h ki code component ke render hone 
      pr invoke na ho to hume kuch is dusre tarike se likhna hoga*/}
      {/* pehla tarike */}
      {/* <button onClick = {alert("button click hua h")}>
        Click me
      </button> */}

        {/* dusra tarika */}
      <button onClick = {() => alert("button click hua h")}>
        Click me
      </button>
      <form onSubmit={handleSubmit}>

        <input type="text" onChange={handleInputChange}/>
        <button type="submit">Submit</button>

      </form>
      <p onMouseOver={handleMouseOver} style = {{color: "red", border: "1px solid black"}}>
        I am para
      </p>
      <button onClick={handleClick}>
        Click me
      </button>
     </div>
  )
}

export default App
