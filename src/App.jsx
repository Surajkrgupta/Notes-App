import React, { useState,useEffect} from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !detail.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    setTask([...task, { title, detail }]);
    setTitle("");
    setDetail("");
  };

  const deleteN = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-indigo-600 text-white py-5 shadow-md">
        <h1 className="text-3xl font-bold text-center">
          📝 Notes App
        </h1>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label className="font-semibold text-gray-700">
              Note Title
            </label>

            <input
              type="text"
              placeholder="Enter note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">
              Note Description
            </label>

            <textarea
              rows="4"
              placeholder="Write your note..."
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-lg p-3 outline-none resize-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Save Note
          </button>
        </form>
      </div>

      {/* Notes */}
      <div className="max-w-6xl mx-auto mt-12 px-6 pb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Recent Notes
        </h2>

        {task.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
            📭 No notes available.
            <br />
            Add your first note above!
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {task.map((elem, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-indigo-600 wrap-break-word">
                    {elem.title}
                  </h3>

                  <p className="text-gray-600 mt-3 wrap-break-word">
                    {elem.detail}
                  </p>
                </div>

                <button
                  onClick={() => deleteN(i)}
                  className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}