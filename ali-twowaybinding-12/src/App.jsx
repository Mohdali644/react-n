import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const formSub = (sub) => { //here we are receiving in args (sub) in arrow function //
    sub.preventDefault()
    console.log("Form Submitted by", title);

    setTitle('')  //here we are again epmting the title after submitting the form
  }

  return (
    <div>
      <form onSubmit={(sub) => { //we create a arrow function to pass args in it //
        formSub(sub)
      }}>
        <input type='text' placeholder='Enter your name' value={title} onChange={(e) => {
          setTitle(e.target.value)
        }}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
