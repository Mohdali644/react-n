import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {

    const navigate = useNavigate()
  const btnClicked = () => {
    navigate('/')
  }

  return (
    <div className='py-2 px-2.5 bg-cyan-800 '>
      <button onClick={()=>{
        // navigate use for returning back to where yow were there on the page //
        navigate('/')
      }} className='px-5 py-2.5 m-4 text-black font-semibold active:scale-95 bg-amber-300 rounded '>Return to Home</button>
      <button onClick={()=> {
        navigate(-1)
      }} className='px-5 py-2.5 m-4 text-black font-semibold active:scale-95 bg-amber-300 rounded '>Back</button>
     
     <button onClick={()=> {
        navigate(+1)
      }} className='px-5 py-2.5 m-4 text-black font-semibold active:scale-95 bg-amber-300 rounded '>Next</button>
     
    </div>
  )
}

export default Navbar2
