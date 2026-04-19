import { useState } from "react";

function Todo() {

  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task === "") return;
    setList([...list, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (i) => {
    const newList = [...list];
    newList[i].done = !newList[i].done;
    setList(newList);
  };

  const deleteTask = (i) => {
    setList(list.filter((_, index) => index !== i));
  };

  return (
    <div className="h-screen flex justify-center items-center 
    bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

      <div className="bg-black dark:bg-slate-800 text-black dark:text-white 
      p-8 rounded-2xl shadow-xl w-96 text-center">

        <h2 className="text-2xl mb-4 text-indigo-600 dark:text-indigo-400 font-bold">
          Todo List
        </h2>

        {/* Input */}
        <div className="flex gap-2 mb-4">
        <input
  value={task}
  onChange={(e) => setTask(e.target.value)}
  placeholder="Enter task..."
  className="border p-2 w-full rounded-lg 
  text-black bg-white 
  dark:bg-slate-700 dark:text-white dark:placeholder-gray-400
  focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

          <button
            onClick={addTask}
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Add
          </button>
        </div>

        {/* List */}
        <div className="max-h-60 overflow-y-auto">

          {list.length === 0 && (
            <p className="text-gray-400 dark:text-gray-500">No tasks yet</p>
          )}

          {list.map((t, i) => (
            <div
              key={i}
              className="flex justify-between items-center mb-2 p-2 rounded-lg 
              hover:bg-gray-100 dark:hover:bg-slate-700 transition"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" onChange={() => toggleTask(i)} />

                <span className={t.done ? "line-through text-gray-400" : ""}>
                  {t.text}
                </span>
              </div>

              <button
                onClick={() => deleteTask(i)}
                className="text-red-500 hover:scale-110 transition"
              >
                ❌
              </button>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Todo;