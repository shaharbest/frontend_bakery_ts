import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
