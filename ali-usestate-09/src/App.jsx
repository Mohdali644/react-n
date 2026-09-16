import React, { useState } from 'react'

const App = () => {
   {/*here the num variable is constant and cannot be changed and it is read only variable
    whereas the setNum varibale is write only we can change it when we want like below */}

    let [num, setNum] = useState(0)

    function IncreaseNum() {
        setNum(num+1)
    }
    function DecreaseNum() {
        setNum(num-1)
    }
    

  return (
   
    <div>
        <h1>{num}</h1>
        <div>
        <button onClick={IncreaseNum}>Increase</button>
        <button onClick={DecreaseNum}>Decrease</button>
        </div>
    </div>
  )
}

export default App
