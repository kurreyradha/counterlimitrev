import { useState } from "react"

const App=()=>{
  const [counter,setCounter]=useState(25)


  // let counter=15

  const addValue=()=>{

    if(counter==20){
      setCounter(counter=20)
    }
    else{
      setCounter(counter+1)
    }
    
  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(value=0)
    }
  }


  return(



    <>
    <h1>chai or react</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addValue}>add value:{counter}</button>
    <button onClick={removeValue}>removeValue:{counter}</button>
    </>
  )
}
export default App;