import { useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Produto from "./Components/Error404";
import Home from "./Pages/Home"




function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Em-Breve" element={<Produto/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
