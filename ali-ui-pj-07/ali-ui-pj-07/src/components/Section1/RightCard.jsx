import React from "react";
import { ArrowRight } from "lucide-react";

const RightCard = () => {
  return (
    <div className="h-full overflow-hidden relative w-80 rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      ></img>
      <div className="absolute top-0 left-0 p-8 flex flex-col justify-between h-full w-full bg-amber-700">
        <h2  className="w-10 h-10 text-2xl font-semi bg-white rounded-full flex justify-center items-center">1</h2>
        <div>
          <p className="text-lg leading-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            corporis qui sapiente cum accusamus voluptatem.
          </p>
          <div>
            <button className="bg-blue-600 text-white px-7 py-3 rounded-full">Satisified</button>
            <button><ArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
