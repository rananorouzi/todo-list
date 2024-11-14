import React, { FC } from "react";

interface TaskFormProps {
  newTaskTitle: string;
  newTaskDescription: string;
  setNewTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  setNewTaskDescription: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
}

const TaskForm: FC<TaskFormProps> = ({
  newTaskTitle,
  newTaskDescription,
  setNewTaskTitle,
  setNewTaskDescription,
  addTask,
}) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Task Title"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-2"
      />
      <input
        type="text"
        placeholder="Task Description"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
      />
      <button
        onClick={addTask}
        className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
