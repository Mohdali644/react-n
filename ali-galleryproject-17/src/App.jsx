import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-400 text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">Loading...</h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div className="px-10 py-5" key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-45 w-49 overflow-hidden rounded-2xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="text-white font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen">
      <div className="flex flex-wrap gap-5">{printUserData}</div>

      <div className="flex justify-center gap-8 items-center p-5">
        <button
          className="bg-amber-400 cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            if(index > 1){
              setIndex(index - 1)
              setUserData([])
            }
          }}
        >
          Prev
        </button>
        <button
          className="bg-amber-400 cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            setUserData([])
            setIndex(index + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
