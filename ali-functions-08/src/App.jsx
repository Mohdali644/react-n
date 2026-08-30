import React from 'react'

const App = () => {
function btnClicked() {
  console.log("Button was Clicked")
}

  return (
    <div>
      <button onClick={btnClicked}>Click me</button>

      {/* <button onMouseEnter={function(){
        console.log("mouse captured")
      }}>New button</button> */}

        {/* <input type='text' placeholder='Enter Name' onChange={function(elem) {
          console.log(elem.target.value)
        }}></input> */}

    </div>
  )
}

export default App
