import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex justify-center items-center 
    bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

      <div className="bg-white dark:bg-slate-800 text-black dark:text-white 
      p-8 rounded-2xl shadow-xl w-80 text-center
      border border-indigo-200 dark:border-slate-600 
      hover:shadow-2xl transition">

        <h2 className="text-3xl mb-6 text-indigo-600 dark:text-indigo-400 font-bold">
          Login
        </h2>

        {/* Email */}
        <input
          placeholder="Email"
          className="w-full mb-3 p-2 
          border border-gray-300 dark:border-slate-600 
          rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 
          transition"
          onChange={(e)=>setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 
          border border-gray-300 dark:border-slate-600 
          rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 
          transition"
          onChange={(e)=>setPassword(e.target.value)}
        />

        {/* Button */}
        <button className="w-full bg-indigo-500 text-white py-2 rounded-lg 
        hover:bg-indigo-600 hover:shadow-lg transition">
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;