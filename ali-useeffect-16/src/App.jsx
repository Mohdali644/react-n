import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  useEffect (function(){
    console.log('use effect is running.........')
  },[]) //we have used array brackets here in this line because passing this epmty brackets//
        // doesn't print console again and again but only 1 time//

  return (
    <div>
      <h1>value of num is {num}</h1>
      <button onClick={() => {
        setNum(num + 1)
      }}>Click</button>
      {/* use effect generally means running diffrent processes at same time when other processes
      are running in simple (Run this code after the page/component loads or updates) */}
    </div>
  )
}

export default App
