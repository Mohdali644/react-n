import React from 'react'
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 p-8 flex flex-col justify-between h-full w-full">
        <h2  className="w-10 h-10 text-2xl font-medium bg-white rounded-full flex justify-center items-center">{props.id+1}</h2>
        <div>
          <p className="text-lg leading-relaxed text-shadow-2xs text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            corporis qui sapiente cum accusamus voluptatem.
          </p>
          <div className="pt-8 flex items-center gap-10">
          <button className="bg-blue-600 text-xl text-center text-white px-8 py-2 rounded-full">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white px-3 py-2 rounded-full">
            <ArrowRight />
          </button>
        </div>

        </div>
      </div>
    </div>
  )
}

export default RightCardContent
