import { useState } from "react";

function Calculator() {

  const [val, setVal] = useState("");

  const handleClick = (b) => {
    if (b === "=") {
      try {
        setVal(eval(val));
      } catch {
        setVal("Error");
      }
    } else if (b === "C") {
      setVal("");
    } else {
      setVal(val + b);
    }
  };

  const buttons = [
    "C", "/", "*", "-",
    "7", "8", "9", "+",
    "4", "5", "6", "=",
    "1", "2", "3", "0"
  ];

  return (
    <div className="h-screen flex justify-center items-center 
    bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

      <div className="bg-white dark:bg-slate-800 text-black dark:text-white 
      p-6 rounded-2xl shadow-xl w-80">

        {/* Display */}
        <input
          value={val}
          readOnly
          className="w-full p-4 mb-4 border rounded-lg text-right text-2xl 
          bg-gray-100 dark:bg-slate-700"
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">

          {buttons.map((b) => (
            <button
              key={b}
              onClick={() => handleClick(b)}
              className={`
                p-4 rounded-lg text-lg font-semibold transition
                ${b === "=" ? "bg-green-500 hover:bg-green-600 text-white" :
                  b === "C" ? "bg-red-500 hover:bg-red-600 text-white" :
                  ["+", "-", "*", "/"].includes(b)
                  ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                  : "bg-gray-200 dark:bg-slate-600 hover:bg-gray-300 dark:hover:bg-slate-500"
                }
              `}
            >
              {b}
            </button>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Calculator;