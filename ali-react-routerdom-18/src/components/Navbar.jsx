import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <h1>Everbuy</h1>
      <div>

        <link to='/'>Home</link>
        <link to='/about'>About</link>
        <link to='/contact'>Contact</link>
        <link to='/product'>Product</link>

      </div>
    </div>
  )
}

export default Navbar
