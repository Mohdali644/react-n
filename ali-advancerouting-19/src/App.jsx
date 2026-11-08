import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Footer/>
      <Contact/>
      {/* Note: to perform routing u need to run this command in the terminal
       (npm i react-router-dom) */}
    </div>
  )
}

export default App
