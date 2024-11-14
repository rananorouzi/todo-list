// src/App.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Task } from "./types/Types";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskDescription, setNewTaskDescription] = useState<string>("");

  useEffect(() => {
    axios
      .get<Task[]>("http://localhost:8080/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const addTask = () => {
    if (!newTaskTitle) return;

    const newTask: Task = {
      title: newTaskTitle,
      description: newTaskDescription,
      completed: false,
    };

    axios
      .post<Task>("http://localhost:8080/tasks", newTask)
      .then((response) => {
        setTasks([...tasks, response.data]);
        setNewTaskTitle("");
        setNewTaskDescription("");
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  const toggleTaskCompletion = (index: number) => {
    const task = tasks[index];
    axios
      .put<Task>(`http://localhost:8080/tasks/${index}`)
      .then((response) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = response.data;
        setTasks(updatedTasks);
      })
      .catch((error) => console.error("Error updating task:", error));
  };

  const removeTask = (index: number) => {
    axios
      .delete(`http://localhost:8080/tasks/${index}`)
      .then(() => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">To-Do List</h1>

        <TaskForm
          newTaskTitle={newTaskTitle}
          newTaskDescription={newTaskDescription}
          setNewTaskTitle={setNewTaskTitle}
          setNewTaskDescription={setNewTaskDescription}
          addTask={addTask}
        />

        <TaskList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
};

export default App;
