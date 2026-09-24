import React from 'react'

const App = () => {

  const formSub = (sub) => { //here we are receiving in args (sub) //
    sub.preventDefault()
    console.log("Form Submitted");
  }

  return (
    <div>
      <form onSubmit={(sub) => { //we create a arrow function to pass args in it //
        formSub(sub)
      }}>
        <input type='text' placeholder='Enter your name'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
