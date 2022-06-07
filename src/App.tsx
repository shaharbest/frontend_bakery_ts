import React from "react";
import "./App.css";
import { Outlet } from 'react-router-dom';
import { Navbar } from "./Components/Navbar";

function App() {
  return <div className="App">
    <Navbar />
    <div className="content">
      <Outlet />
    </div>
  </div>;
}

export default App;
