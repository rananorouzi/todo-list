from http.server import HTTPServer
from .handlers import RequestHandler

def run(server_class=HTTPServer, handler_class=RequestHandler, port=8080):
    """Run the HTTP server."""
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting server on port {port}...")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
