import { useState } from 'react'

import './App.css'

function App() {
 const [counter,setcounter]=useState(9);

 function decreamentCount(){
 setcounter(prevcount=>prevcount-1)
 }

 function increamentCount(){
setcounter(prevcount=>prevcount+1)
 }
  return (
    <>
      <button onClick={decreamentCount}>-</button>
      <span>{counter}</span>
      <button onClick={increamentCount}>+</button>
    </>
  )
}

export default App
