import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-6 px-8 bg-cyan-900 justify-between'>
      <h2 className='text-xl font-semibold'>Apple</h2>
      <div className='flex gap-8'>
        <a className='text-xl font-semibold' href='/'>Home</a>
        <a className='text-xl font-semibold' href='/about'>About</a>
        <a className='text-xl font-semibold' href='/contact'>Contact</a>


      </div>
    </div>
  )
}

export default Navbar
