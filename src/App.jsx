import React from "react";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import ImageCrop from "./components/ImageCrop";

function App() {
  return (
    <div className="app bg-dynamic-bg">
      <Navbar />
      <div className="min-h-screen p-8">
        <Routes>
          <Route path="/" Component={Card} />
          <Route path="/crop" Component={ImageCrop} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
