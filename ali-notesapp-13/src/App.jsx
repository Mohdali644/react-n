import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);
    console.log(task);

    setTitle("");
    setDetails("");

    if (title.trim() === "" || details.trim() === "") {
      alert("Please fill in both title and details before adding a note!");
      return;
    }
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-amber-50">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 items-start gap-3 p-8 flex-col bg-black-800 text-gray-300 text-4xl text-center"
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
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white active:scale-95 w-full outline-none text-black font-semibold text-3xl rounded-2xl py-4 px-3">
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-semibold ">Your Notes</h1>
        <div className="gap-7 flex flex-wrap content-start items-start mt-4 h-[90%] overflow-auto">
          
{task.map(function (elem, idx) {
  return (
    <div
      key={idx}
      className="h-52 w-48 shrink-0 rounded-3xl bg-cover bg-center text-black p-6 flex flex-col bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]"
    >
      <h3 className="leading-tight text-[19px] font-bold wrap-break-word">
        {elem.title}
      </h3>

      <p className="mt-2 leading-tight font-medium text-gray-500 wrap-break-word">
        {elem.details}
      </p>

      <button
        type="button"
        onClick={() => deleteNote(idx)}
        className="bg-red-600 active:scale-95 mt-auto font-semibold w-full text-center text-white rounded-xl p-1"
      >
        Delete
      </button>
    </div>
  );
})}

        </div>
      </div>
    </div>
  );
};

export default App;
App;
