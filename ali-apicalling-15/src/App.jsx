import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setdata] = useState([])

  const getData = async () => {

    const response = await axios.get('https://picsum.photos/v2/list')

    setdata(response.data)



  //  const demo = await fetch('https://jsonplaceholder.typicode.com/posts')
  //  const data = await demo.json()
  //  console.log(data)
    //-------- and now we use axios api to install it we use npm i axios in the terminal---------// 
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (elem,idx) {
          return <h3>Hello {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
