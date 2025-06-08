/**
 * Main entry point for the React application
 * Renders the root App component into the DOM
 */
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

// Get the root element
const rootElement = document.getElementById("root");

// Ensure root element exists
if (!rootElement) {
  throw new Error(
    "Root element not found. Please ensure there is a div with id 'root' in your index.html"
  );
}

// Create root and render app
ReactDOM.createRoot(rootElement).render(<App />);
