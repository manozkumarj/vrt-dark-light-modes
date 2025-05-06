import React from "react";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="min-h-screen p-24">
        <Routes>
          <Route path="/" Component={Card} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
