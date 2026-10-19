import React from 'react'

const App = () => {
  async function getData () {
   const demo = await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = await demo.json()
   console.log(data)
   
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
