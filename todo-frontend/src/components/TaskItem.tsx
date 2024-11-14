import React, { FC } from "react";
import { Task } from "../types/Types";
import TaskActions from "./TaskActions";

interface TaskItemProps {
  task: Task;
  index: number;
  toggleTaskCompletion: (index: number) => void;
  removeTask: (index: number) => void;
}

const TaskItem: FC<TaskItemProps> = ({ task, index, toggleTaskCompletion, removeTask }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 shadow-md rounded-md">
      <div className="flex-1">
        <h3
          className={`font-medium text-lg ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.title}
        </h3>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>
      <TaskActions
        taskCompleted={task.completed}
        toggleTaskCompletion={() => toggleTaskCompletion(index)}
        removeTask={() => removeTask(index)}
      />
    </div>
  );
};

export default TaskItem;
