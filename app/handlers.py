import json
from http.server import BaseHTTPRequestHandler
from .models import load_tasks, save_tasks

class RequestHandler(BaseHTTPRequestHandler):
    def set_headers(self):
        """Set common headers for all responses, including CORS headers."""
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')  # Allow any origin
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')  # Allow specific methods
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')  # Allow specific headers
        self.end_headers()

    def do_OPTIONS(self):
        """Handle preflight OPTIONS requests for CORS."""
        self.send_response(200)
        self.set_headers()

    def do_GET(self):
        """Handle GET requests to fetch tasks."""
        if self.path == '/tasks':
            tasks = load_tasks()
            self.send_response(200)
            self.set_headers()  # Add CORS headers here
            self.wfile.write(json.dumps(tasks).encode())
        else:
            self.send_response(404)
            self.end_headers()

    def do_POST(self):
        """Handle POST requests to add a task."""
        if self.path == '/tasks':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            task_data = json.loads(post_data)

            tasks = load_tasks()
            task_data["completed"] = False  # Default value for new tasks
            tasks.append(task_data)
            save_tasks(tasks)

            self.send_response(201)
            self.set_headers()  # Add CORS headers here
            self.wfile.write(json.dumps(task_data).encode())

    def do_PUT(self):
        """Handle PUT requests to update a task (mark as complete/incomplete)."""
        if self.path.startswith('/tasks/'):
            task_id = int(self.path.split('/')[-1])
            tasks = load_tasks()

            if 0 <= task_id < len(tasks):
                task = tasks[task_id]
                task['completed'] = not task['completed']  # Toggle completion status
                save_tasks(tasks)

                self.send_response(200)
                self.set_headers()  # Add CORS headers here
                self.wfile.write(json.dumps(task).encode())
            else:
                self.send_response(404)
                self.end_headers()

    def do_DELETE(self):
        """Handle DELETE requests to remove a task."""
        if self.path.startswith('/tasks/'):
            task_id = int(self.path.split('/')[-1])
            tasks = load_tasks()

            if 0 <= task_id < len(tasks):
                deleted_task = tasks.pop(task_id)
                save_tasks(tasks)

                self.send_response(200)
                self.set_headers()  # Add CORS headers here
                self.wfile.write(json.dumps(deleted_task).encode())
            else:
                self.send_response(404)
                self.end_headers()
