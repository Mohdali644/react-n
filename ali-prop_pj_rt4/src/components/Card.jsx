import React from 'react'
import {Bookmark} from 'lucide-react'

const card = () => {
  return (
    <div className='parent'>

      <div className="card">
        <div className="top">
          <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg"></img>
          <button>Save <Bookmark size={12}/></button>
        </div>

        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senoir UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        <div className="bottom">
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
              <button>Apply Now</button>
            </div>
        </div>
      
      </div>
  
    </div>
  )
}

export default card
