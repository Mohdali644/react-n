import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    
    const copyTask = [...task];
    copyTask.push({title,details})

    setTask(copyTask)
    console.log(task);

    setTitle('')
    setDetails('')

   if (title.trim() === "" || details.trim() === "") {
    alert("Please fill in both title and details before adding a note!");
    return;
  }
  };

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
          className="p-7 outline-none py-6 w-full border-4 border-amber-100 rounded-2xl"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
              setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="p-7 outline-none py-20 w-full border-4 border-amber-100 rounded-2xl"
          placeholder="Write details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button className="bg-white active:scale-95 w-full outline-none text-black font-semibold text-3xl rounded-2xl py-4 px-3">
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-semibold ">Your Notes</h1>
        <div className="gap-7 flex flex-wrap mt h-full overflow-auto">
          {task.map(function(elem,idx){
              return <div key={idx} className="h-52 w-48 rounded-3xl bg-cover text-black py-10 px-10 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
                <div>
                <h3 className="leading-tight text-[19px] font-bold">{elem.title}</h3>
                <p className="mt-2 leading-tight mr-11 font-medium text-gray-500">{elem.details}</p>
              </div>
              <button className="bg-red-600 active:scale-95 mt-20 font-semibold flex text-center w-full justify-center text-white rounded-xl px-10 p-1">Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
App;
