import TaskCard from "./TaskCard";


const TaskList = ({ tasks, onDeleteTask }) => {
  if (tasks.length == 0) {
    return (
      <p className="text-center text-gray-500">
        No tasks found
      </p>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          onDeleteTask={() => onDeleteTask(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;
