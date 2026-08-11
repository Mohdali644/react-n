import React from 'react'
import Card from './components/Card'
import User from './components/User'

const arr = [10, 20, 30]
const App = () => {
  return (
    <div>
      {/* <Card />
      <Card /> */}

      <User name='Ali'/>
      <User name='Yaseen'/>
      <User name={arr[1]}/>
    </div>
  )
}

export default App
