import React from 'react'

const App = () => {

const scroll = (elem) => {
  if(elem>0) {
    console.log("Scrolling Correct(forward)",elem)
  }else{
    console.log("Scrolling Wrong(backward)",elem)
  }
}


// function btnClicked() {
//   console.log("Button was Clicked")
// }

  return (
    <div onWheel={(elem) => {
      scroll(elem.deltaY)
    }}>


      {/* <button onClick={btnClicked}>Click me</button> */}

    {/*---------------------------------------------------------------------- */}

      {/* <button onMouseEnter={function(){
        console.log("mouse captured")
      }}>New button</button> */}

      {/*--------------------------------------------------------------------- */}

        {/* <input type='text' placeholder='Enter Name' onChange={function(elem) {
          console.log(elem.target.value)
        }}></input> */}

      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>

    </div>
  )
}

export default App
