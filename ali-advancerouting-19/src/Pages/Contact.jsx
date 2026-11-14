import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div>
        <Link to='/contact/men'>Men</Link>
        <Link to='/contact/women'>Women</Link>
      </div>
      <h1>Contact</h1>
    </div>
  )
}

export default Contact
