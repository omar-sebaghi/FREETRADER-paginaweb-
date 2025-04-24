import React from "react";
import ReactDOM from "react-dom/client";  // Aquí es donde se importa 'createRoot'
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';



// Usamos 'createRoot' en lugar de 'render'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
