import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('')

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
