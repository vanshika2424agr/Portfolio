import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex justify-center items-center 
    bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

      <div className="bg-white dark:bg-slate-800 text-black dark:text-white 
      p-10 rounded-2xl shadow-xl text-center">

        <h2 className="text-3xl mb-6 text-indigo-600 dark:text-indigo-400">Counter</h2>

        <div className="text-5xl mb-6">{count}</div>

        <div className="flex gap-4 justify-center">
          <button onClick={()=>setCount(count+1)} className="bg-green-500 text-white px-4 py-2 rounded">+</button>
          <button onClick={()=>setCount(count-1)} className="bg-red-500 text-white px-4 py-2 rounded">-</button>
          <button onClick={()=>setCount(0)} className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
        </div>

      </div>
    </div>
  );
}

export default Counter;