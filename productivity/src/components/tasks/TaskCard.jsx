
const TaskCard = ({task, onDeleteTask}) => {
  
  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-500">
          {task.category} • {task.priority} • {task.status}
        </p>
      </div>

      <div className="flex gap-2">
        <button className="text-green-600">✔</button>
        <button onClick={() => onDeleteTask(task.id)} className="text-red-600">✖</button>
      </div>
    </div>
  );
};

export default TaskCard;
