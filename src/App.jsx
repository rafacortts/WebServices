
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Erro from "./Pages/Erro"
import SaibaMais from "./Pages/SaibaMais";





function App() {
  return (
    <>
  
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Em-Breve" element={<Erro/>}/>
      <Route path="/Saiba-Mais" element={<SaibaMais/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
