import React from 'react'

const App = () => {

  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)

//------------------------------------------------------------//  
  // localStorage.setItem('user', 'Ali')
  // localStorage.removeItem('user')
//-------------------------------------------------------------//


  //JSON.stringify method coverts the object into string in the local storage into showing each 
  // object value present in the object

  // const user = {
  //   username: 'Ali',
  //   age:21,
  //   city: 'Hyderabad'
  // }


// localStorage.setItem('user',JSON.stringify(user))
  
//------------------------------------------------------------------//


  return (
    <div>
      App
    </div>
  )
}

export default App
