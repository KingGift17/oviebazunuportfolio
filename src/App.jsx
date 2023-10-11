import { useState } from "react";
import Sidebar from "./components/Sidebar";

import "./App.css";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div>
      <Sidebar />
      <Homepage />
    </div>
  );
}

export default App;
