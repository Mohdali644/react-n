import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([]);

  const getData = async () => {
   const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=20')
   setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[])

  let printUserData = <h3 className='text-gray-400 text-3xl p-10 m-10'>Loading...</h3>

  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx){


      return <div className='px-10 py-5' key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden rounded-2xl'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt=''/> 
      </div>
      <h2 className='text-white font-bold text-lg'>{elem.author}</h2>
 
        </a>
        </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen'>
     
    <div className='flex flex-wrap gap-5'>
      {printUserData}
    </div>
    </div>

  )
}

export default App
