import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskProvider";

const AddTask = () => {
    const [taskData, setTaskData] = useContext(TaskContext)
    const navigate = useNavigate()
    const [detail, setDetail] = useState({
        title: "",
        description: "",
        // priority: "medium",
        status: "pending",
    })

    const submit = () =>{
        if(detail.title.trim() === '' || detail.description.trim() === '') return;
        setTaskData([...taskData, detail])
        navigate("/")
    }
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white w-full max-w-md rounded-xl p-6">

                <h2 className="text-2xl font-bold mb-4 text-center">
                    ➕ Add New Task
                </h2>

                {/* Title */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Task Title
                    </label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setDetail({...detail, title: e.target.value})
                        }}
                        placeholder="Enter task title"
                        className="w-full border px-3 py-2 rounded-lg"
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Description
                    </label>
                    <textarea
                        rows="3"
                        onChange={(e) => {
                            setDetail({...detail, description: e.target.value})
                        }}
                        placeholder="Enter task description"
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
                     className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                        Save Task
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AddTask;
