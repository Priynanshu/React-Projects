import { useContext, useState } from "react";
import { TaskDataContext } from "../context/TaskProvider";


const TaskForm = () => {

  const [taskData, setTaskData] = useContext(TaskDataContext)
  const [form, setForm] = useState({
    title: "",
    category: "",
    priority: "",
    status: "",
  })

  const emptyForm = {
    title: "",
    category: "",
    priority: "",
    status: "",
  };

  const submit = () => {
    if (form.title.trim() === "") return;
    setTaskData([...taskData, form])
    setForm(emptyForm)
  }
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        value={form.title}
        onChange={(e) => {
          setForm({ ...form, title: e.target.value })
        }}
        placeholder="Enter task"
        className="border p-2 rounded w-full"
      />

      <select
      value={form.category}
        onChange={(e) => {
          setForm({ ...form, category: e.target.value })
        }} className="border p-2 rounded">
        <option>Category</option>
        <option>Work</option>
        <option>Study</option>
        <option>Personal</option>
      </select>

      <select
      value={form.status}
        onChange={(e) => {
          setForm({ ...form, status: e.target.value })
        }}
        className="border p-2 rounded">
        <option>Status</option>
        <option>Completed</option>
        <option>Pending</option>
      </select>

      <select
      value={form.priority}
        onChange={(e) => {
          setForm({ ...form, priority: e.target.value })
        }}
        className="border p-2 rounded">
        <option>Priority</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button onClick={submit} className="bg-black text-white px-4 py-2 rounded">
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
