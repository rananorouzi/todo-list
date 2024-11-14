// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";  // Updated import
import "./index.css";  // Tailwind CSS
import App from "./App"; // Import the App component

// Create a root element and render the App
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement  // Ensuring correct type for root element
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
