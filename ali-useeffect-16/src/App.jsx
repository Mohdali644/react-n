import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)

  const [b, setB] = useState(0)

  function aChanging() {
    console.log('A ki value change hogayi')
  }

  function bchanging() {
    console.log('B ki value change hogayi')
  }

  useEffect (function(){
    console.log('use effect is running')
  },[a]) // the array i have passed because it depends on another when chnaging

  return (
    <div>
       <h1>A is {a}</h1>
       <h1>B is {b}</h1>
      <button onClick={()=> {
        setA(a + 1)
      }}>Change A</button>
      <button onClick={()=> {
        setB(b - 1)
      }}>Change B</button>

    </div>
  )
}

export default App




























//--------------------------- diffrent code of use effect first refer the above ---------------//


// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)

//   const [num2, setNum2] = useState(50)

//   useEffect (function(){
//     console.log('use effect is running.........')
//   },[]) //we have used array brackets here in this line because passing this epmty brackets//
//         // doesn't print console again and again but only 1 time//

//   return (
//     <div>
//       <h1>num is {num}</h1>
//       <h1>num is {num2}</h1>
//       <button onClick={() => {
//         setNum(num + 1)
//         setNum2(num2 + 10)
//       }}>Click</button>

//       {/* useEffect lets you synchronize a component with external systems, such as APIs, timers,
//        event listeners, or browser features, after React commits a render. */}
//       {/* ----------------------------------------------------------------------------- */}
//       {/* use effect generally means running diffrent processes at same time when other processes
//       are running in simple (Run this code after the page/component loads or updates) */}
//     </div>
//   )
// }

// export default App
