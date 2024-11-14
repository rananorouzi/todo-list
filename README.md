# To-Do List Backend with Python and React

This project is a simple **To-Do List application** with a **Python-based backend** and a **React-based frontend**. The backend exposes a RESTful API that allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks, while the frontend allows users to interact with the tasks in a user-friendly interface.



## Features

- **GET /tasks**: Fetch all tasks.
- **POST /tasks**: Add a new task.
- **PUT /tasks/{id}**: Update task status (toggle completion).
- **DELETE /tasks/{id}**: Remove a task.

### React Frontend Features:

- Display a list of tasks.
- Add new tasks.
- Toggle task completion.
- Delete tasks.

## Backend Overview

The backend is a **Python-based HTTP server** that handles CRUD operations on tasks. The tasks are stored in a **JSON file** (`tasks.json`), which is read from and written to by the application.

### Backend API

The backend API supports the following routes:

- **GET /tasks**  
  Retrieves the list of all tasks.

- **POST /tasks**  
  Adds a new task to the list. The task data must be sent as JSON in the request body, e.g.:
  ```json
  {
      "title": "Buy groceries",
      "description": "Milk, eggs, bread"
  }
- **PUT /tasks/{id}**  
Updates the status of a task (marks it as completed or uncompleted). The id is the task index in the list.

- **DELETE /tasks/{id}** 
Deletes a task with the specified id.

### Files in the Backend:
- **app/models.py**: Handles the task data and file operations (loading and saving tasks).
- **app/handlers.py**: Contains the request handler class (RequestHandler) to process HTTP requests.
- **app/server.py**: Starts the HTTP server and handles incoming requests.


## Frontend Overview

The frontend is built with **React**. It communicates with the Python backend to fetch tasks, add new ones, update their completion status, and delete them.

### Frontend Features:

- Display tasks with a checkbox for marking them as complete.
- Add new tasks by submitting a form.
- Delete tasks.
- The frontend sends HTTP requests to the backend API for managing tasks.

### Files in the Frontend:

- `src/components/TaskList.tsx`: Displays the list of tasks.
- `src/components/TaskItem.tsx`: Renders individual task items with options to complete or delete.
- `src/components/TaskForm.tsx`: Form to add new tasks.
- `src/App.tsx`: The main React app component.

## How to Use

### Backend (Python)

1. **Get all tasks**:  
   Send a **GET** request to `http://localhost:8080/tasks` to retrieve the list of tasks.

2. **Add a new task**:  
   Send a **POST** request to `http://localhost:8080/tasks` with a JSON body:
   ```json
   {
       "title": "Buy groceries",
       "description": "Milk, eggs, bread"
   }
3. **Update task status**:
Send a `PUT` request to `http://localhost:8080/tasks/{id}` to toggle the completion status of a task.

4. **Delete a task**:
Send a `DELETE` request to `http://localhost:8080/tasks/{id}` to remove a task.

### Frontend (React)

1. **View tasks**:
The task list is automatically fetched from the backend and displayed on the page.

2. **Add a new task**:
Use the form to add a new task, which will be sent to the backend via a `POST` request.

3. **Complete/Incomplete a task**:
Click the checkbox next to a task to toggle its completion status.

4. **Delete a task**:
Click the delete button next to a task to remove it from both the UI and the backend.




## Folder Structure and Purpose

### `app/`

- **`__init__.py`**: Initializes the Python module, ensuring that the directory is treated as a package.
- **`models.py`**: Contains the logic for loading and saving tasks from/to the JSON file.
- **`handlers.py`**: Defines the `RequestHandler` class, which contains all the logic for handling HTTP requests.
- **`server.py`**: The main entry point of the server. It starts the HTTP server and binds the request handler.

### `data/`

- **`tasks.json`**: A JSON file where tasks are stored. This file is read and written to by the backend when tasks are fetched or updated.

### `frontend/`

- **`public/index.html`**: The main HTML file for the frontend.
- **`src/App.tsx`**: Main React component that manages the UI.
- **`src/components/`**: Folder containing the React components (`TaskList.tsx`, `TaskItem.tsx`, and `TaskForm.tsx`).

