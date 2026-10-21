import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = () => {
    console.log('Data aa gaya')
  }

  return (
    <div className='bg-black h-screen'>
      <button onClick={getData} className='bg-green-500 text-white px-5 py-2.5 rounded-3xl text-2xl m-14 active:scale-95'>Get Data</button>
    </div>
  )
}

export default App
