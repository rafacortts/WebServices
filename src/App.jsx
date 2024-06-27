import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Erro from "./Pages/Erro";
import SaibaMais from "./Pages/SaibaMais";
import TermosPrivacidade from "./Pages/TermosPrivicade";
import LoginCadastro from "./Pages/LoginCadastro"
import Dashboard from "./Pages/Dashboard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Em-Breve" element={<Erro />} />
            <Route path="/Privacidade" element={<TermosPrivacidade />} />
            <Route path="/Saiba-Mais" element={<SaibaMais />} />
            <Route path="/Login" element={<LoginCadastro />} />
            <Route path="/DashBoard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
 
    </>
  );
}

export default App;
