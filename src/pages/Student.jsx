import { useState } from "react";

function Student() {

  const [data, setData] = useState({
    name: "",
    roll: "",
    marks: ""
  });

  const [students, setStudents] = useState([]);

  // Add Student
  const addStudent = () => {
    if (!data.name || !data.roll || !data.marks) return;

    setStudents([...students, data]);
    setData({ name: "", roll: "", marks: "" });
  };

  // Delete Student
  const deleteStudent = (i) => {
    setStudents(students.filter((_, index) => index !== i));
  };

  return (
    <div className="h-screen flex justify-center items-center 
    bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

      <div className="bg-white dark:bg-slate-800 text-black dark:text-white 
      p-8 rounded-2xl shadow-xl w-[420px] text-center">

        <h2 className="text-2xl mb-4 text-indigo-600 dark:text-indigo-400 font-bold">
          Student Management
        </h2>

        {/* Inputs */}
        <div className="flex flex-col gap-2 mb-4">

          <input
            placeholder="Name"
            value={data.name}
            onChange={(e)=>setData({...data, name:e.target.value})}
            className="border p-2 rounded-lg"
          />

          <input
            placeholder="Roll No"
            value={data.roll}
            onChange={(e)=>setData({...data, roll:e.target.value})}
            className="border p-2 rounded-lg"
          />

          <input
            placeholder="Marks"
            value={data.marks}
            onChange={(e)=>setData({...data, marks:e.target.value})}
            className="border p-2 rounded-lg"
          />

          <button
            onClick={addStudent}
            className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
          >
            Add Student
          </button>

        </div>

        {/* List */}
        <div className="max-h-60 overflow-y-auto">

          {students.length === 0 && (
            <p className="text-gray-400">No Students Added</p>
          )}

          {students.map((s, i) => (
            <div
              key={i}
              className="flex justify-between items-center 
              bg-gray-100 dark:bg-slate-700 p-2 mb-2 rounded-lg"
            >
              <div className="text-left">
                <p><b>Name:</b> {s.name}</p>
                <p><b>Roll:</b> {s.roll}</p>
                <p><b>Marks:</b> {s.marks}</p>
              </div>

              <button
                onClick={() => deleteStudent(i)}
                className="text-red-500 text-lg hover:scale-110"
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

export default Student;