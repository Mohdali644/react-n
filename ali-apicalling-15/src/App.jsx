import React, { useState } from 'react'

const App = () => {

  const [change, setchange] = useState('')

  function getData () {
    console.log("Getting Data")
  }

  return (
    <div>
      <button onClick={getData}>Click karo</button>
    </div>
  )
}

export default App
