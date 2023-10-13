import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Homepage from "./components/Homepage";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Sidebar />
      <Homepage />
      <Work />
    </div>
  );
}

export default App;
