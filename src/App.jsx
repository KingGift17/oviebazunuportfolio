import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Homepage from "./components/Homepage";
import Work from "./assets/data/Work";
import Projects from "./assets/data/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Sidebar />
      <Homepage />
      <div className="h-10 bg-[#312854]"></div>
      <Projects />
      <div className="h-10 bg-[#312854]"></div>
      <Work />
      <Footer />
    </div>
  );
}

export default App;
