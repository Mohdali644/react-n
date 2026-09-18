import React, { useState } from 'react'

const App = () => {
{/* we will be creating a new variable in the (use state variable function) to print values of 
  object without refrencing and creating its own space we will be destructing it using (...num)*/}
    const [num,setNum] = useState({user:'Akhia', age:21})
    const btnClicked = () => {
        const newNum = {...num};
        newNum.user = 'Ali'
        newNum.age = '22'
        setNum(newNum)
    }

    const [n, setN] = useState([25,50,75])
    const click = () => {
        const newN = [...n];
        newN.push(100)
        setN(newN)
    }


  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
      <h1>{n}</h1>
      <button onClick={click}>Update Array</button>
    </div>
    
  )
}

export default App
