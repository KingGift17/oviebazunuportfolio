import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Homepage from "./components/Homepage";
import Work from "./components/Work";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Sidebar />
      <Homepage />
      <Projects />
      <Work />
    </div>
  );
}

export default App;
