import { useEffect, useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TimeComponent from './components/TimeComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(0);


// hamehsa dhyn rkhna h use effect hook
// hamesha component ke top pr likha jaega


// useEffect(() => {
//   // ye space hai side effect funtion ke liye
//   console.log("Compound mounted");
//   return () =>{
//     // ye space hai clean-up function ke liye
//     console.log("Component unmounted");
//   }
//   // ye h comma separated dependency list
// }, []);

// variation 01-> runs on every render

// useEffect(() => {
//     alert("I will run on each render");
// })


// variation 02-> 
// that runs on only first render
// useEffect(() => {
//   alert("I will run on only 1st render")
// }, [])


// variation 03-> 
// useEffect(() => {
//   alert("I will run every time when count is updated")
// }, [count])


// variation 04
// multiple dependencies
// useEffect(() => {
//   alert("I will run every time when count/total is updated")
// },[count, total])


// variation 05
// is baar let's add a cleanup function

// useEffect(() => {
//   alert("Count is updated")

//   return() => {
//     alert("Count is unmounted from UI")
//   }
// }, [count])


// function handleClick(){
//   setCount(count + 1);
// }

// function handleClickTotal(){
//   setTotal(total + 1);
// }

  return (
    <div>
      {/* <LoggerComponent /> */}
      {/* <TimeComponent />
      {/* <DataFetcher/> */}
      {/* <ResizeComponent/> */}
      {/* <MultiEffectComponent></MultiEffectComponent> */}
      {/* <button onClick = {handleClick}>
       update count
      </button>
      <br />
      Count is: {count}
      <br/>
       <button onClick = {handleClickTotal}>
        update total
      </button>
      <br />
      Total is: {total} */} 
    </div>
  )
}

export default App
