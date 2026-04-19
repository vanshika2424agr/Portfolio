import { useState } from "react";

function Register() {
  const [data, setData] = useState({name:"",email:"",password:""});

  return (
    <div className="h-screen flex justify-center items-center 
    bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

      <div className="bg-white dark:bg-slate-800 text-black dark:text-white 
      p-8 rounded-2xl shadow-xl w-80 text-center">

        <h2 className="text-3xl mb-6 text-indigo-600 dark:text-indigo-400 font-bold">
          Register
        </h2>

        <input placeholder="Name" className="w-full mb-3 p-2 border rounded"
          onChange={(e)=>setData({...data,name:e.target.value})} />

        <input placeholder="Email" className="w-full mb-3 p-2 border rounded"
          onChange={(e)=>setData({...data,email:e.target.value})} />

        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded"
          onChange={(e)=>setData({...data,password:e.target.value})} />

        <button className="w-full bg-indigo-500 text-white py-2 rounded">
          Register
        </button>

      </div>
    </div>
  );
}

export default Register;