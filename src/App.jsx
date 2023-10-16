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
      <div className="h-10 bg-[#312854]"></div>
      <Projects />
      <div className="h-10 bg-[#312854]"></div>
      <Work />
      <div className="h-10 bg-[#312854]"></div>
    </div>
  );
}

export default App;
