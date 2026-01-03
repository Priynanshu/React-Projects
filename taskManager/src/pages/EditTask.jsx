import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../context/TaskProvider";

const EditTask = () => {
  const [taskData, setTaskData] = useContext(TaskContext)
  const { index } = useParams()
  const navigate = useNavigate()

  const [detail, setDetail] = useState(taskData[index])

  const submit = () => {
     if(detail.title.trim() === '' || detail.description.trim() === '') return;
     const update = [...taskData]
     update[index] = detail
     setTaskData(update)
     navigate("/")
  }
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-4 text-center">
          ✏️ Edit Task
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Task Title
          </label>
          <input
          onChange={(e) => {
            setDetail({...detail, title: e.target.value})
          }}
            type="text"
            className="w-full border px-3 py-2 rounded-lg"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
          onChange={(e) => {
            setDetail({...detail, description: e.target.value})
          }}
            rows="3"
            className="w-full border px-3 py-2 rounded-lg"
          />
        </div>

        {/* Status */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Status
          </label>
          <select 
          onChange={(e) => {
            setDetail({...detail, status: e.target.value})
          }}
          className="w-full border px-3 py-2 rounded-lg">
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Link to="/" className="px-4 py-2 border rounded-lg">
            Cancel
          </Link>
          <button
          onClick={submit}
           className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Update Task
          </button>
        </div>

      </div>
    </div>
  );
};

export default EditTask;
