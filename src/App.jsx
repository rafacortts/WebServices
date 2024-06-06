import { useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import EmBreve from "./Components/Error404";
import Home from "./Pages/Home"
import Erro from "./Pages/Erro"




function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Em-Breve" element={<Erro/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
