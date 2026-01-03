import { useContext, useState } from "react";
import CategoryFilter from "../filters/CategoryFilter";
import PriorityFilter from "../filters/PriorityFilter";
import StatusFilter from "../filters/StatusFilter";
import StatsSummary from "../stats/StatsSummary";
import TaskForm from "../tasks/TaskForm";
import TaskList from "../tasks/TaskList";
import { TaskDataContext } from "../context/TaskProvider";


const Dashboard = () => {
  const [taskData, setTaskData] = useContext(TaskDataContext)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all");
  const [priority, setPriority] = useState("all");
  const [status, setStatus] = useState("all");

  const deleteTask = (index) => {
    setTaskData(prev =>
      prev.filter((_, i) => i !== index)
    );
  };

  const totalTasks = taskData.length;

  const completedTasks = taskData.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = taskData.filter(
    (task) => task.status === "Pending"
  ).length;



  const filteredTask = taskData.filter((t) => {
    const matchTitle = t.title.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === "all" ? true : t.category == category;
    const matchPriority = priority === "all" ? true : t.priority === priority;
    const matchStatus = status === "all" ? true : t.status === status;

    return (
      matchTitle &&
      matchCategory &&
      matchPriority &&
      matchStatus
    )
  })
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Personal Productivity Dashboard</h1>

      <StatsSummary total={totalTasks}
      completed={completedTasks}
      pending={pendingTasks}
       />

      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <TaskForm />

        <div className="flex gap-4 flex-wrap">
          <CategoryFilter value={category} onChange={setCategory} />
          <PriorityFilter value={priority} onChange={setPriority} />
          <StatusFilter value={status} onChange={setStatus} />
        </div>
      </div>

      <TaskList tasks={filteredTask} onDeleteTask={deleteTask} />
    </div>
  );
};

export default Dashboard;
