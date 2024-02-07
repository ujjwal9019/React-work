import Chai from "./chai"
import { useState } from 'react'
import React from 'react'

function App() {
  let [counter,setCounter] = useState(15)

  // let counter = 5
  const addValue = () => {
      console.log("Clicked" ,counter)
      // counter = counter + 1
      setCounter(counter + 1)
  }

  const removeValue = () => {
    console.log("Clicked" ,counter)
    if(counter > 0){
      setCounter(counter - 1)
    }
    // else{
    //   break
    // }
   
  }
  return (
    <>
<h2>Counter Project : {counter}</h2>
<button onClick = {addValue}>Add Value </button>
<br></br>
<button onClick = {removeValue}>Decrease Value   </button>
</>
)
}

export default App
