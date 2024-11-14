import React, { FC } from "react";
import { Task } from "../types/Types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (index: number) => void;
  removeTask: (index: number) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, toggleTaskCompletion, removeTask }) => {
  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available.</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            toggleTaskCompletion={toggleTaskCompletion}
            removeTask={removeTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
