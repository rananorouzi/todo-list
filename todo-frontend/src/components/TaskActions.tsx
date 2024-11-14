import React, { FC } from "react";

interface TaskActionsProps {
  taskCompleted: boolean;
  toggleTaskCompletion: () => void;
  removeTask: () => void;
}

const TaskActions: FC<TaskActionsProps> = ({
  taskCompleted,
  toggleTaskCompletion,
  removeTask,
}) => {
  return (
    <div className="flex space-x-3">
      <button
        onClick={toggleTaskCompletion}
        className={`p-2 rounded-full ${
          taskCompleted ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
        }`}
      >
        {taskCompleted ? "Completed" : "Mark as Complete"}
      </button>
      <button
        onClick={removeTask}
        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskActions;
