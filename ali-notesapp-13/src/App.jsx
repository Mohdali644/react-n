import React, { useState } from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  const [title, setTitle] = useState('')

  return (
    <div className="h-screen lg:flex bg-black text-amber-50">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 items-start gap-3 p-8 flex-col bg-black-800 text-cyan-400 text-4xl text-center"
      >
        <input
          type="text"
          flex
          className="p-7 outline-none py-6 w-full border-4 border-amber-100 rounded-2xl"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e)=> {
            console.log(e.target.value)
          }}
        />
        <input
          type="text"
          className="p-7 outline-none py-20 w-full border-4 border-amber-100 rounded-2xl"
          placeholder="Write details"
        />
        <button className="bg-white w-full outline-none text-black font-semibold text-3xl rounded-2xl py-4 px-3">
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-semibold ">Your Notes</h1>
        <div className="gap-4 flex flex-wrap mt-1 h-full overflow-auto">
          <div className="h-52 w-40 rounded-3xl bg-white "></div>
          <div className="h-52 w-40 rounded-3xl bg-white "></div>
          <div className="h-52 w-40 rounded-3xl bg-white "></div>
        </div>
      </div>
    </div>
  );
};

export default App;
App;
