import React from 'react'

const Navbar = (props) => {
    function changeTheme () {
        console.log('Theme change', theme)
        props.setTheme('Dark')
    }
    
  return (
    <div>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
