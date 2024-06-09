import Hero from "../Components/Hero";
import Leads from "../Components/Leads";
import Menu from "../Components/Menu";
import Garantias from "../Components/Garantias";
import React from "react";
import Services from "../Components/Serviços";
import CookieConsent from "react-cookie-consent";

const Home = () => {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <Services />
      <Leads />
      <Garantias />
      <CookieConsent
        location="none"
        buttonText="Aceitar"
        cookieName="myAwesomeCookieName2"
        style={popupStyles.container}
        buttonStyle={popupStyles.acceptButton}
        contentStyle={popupStyles.content}
        expires={15}
        disableStyles={true}
      >
        Este site usa cookies para melhorar a experiência do usuário.
        <a href="/politica-de-cookies" style={popupStyles.link}>Leia mais</a>
      </CookieConsent>
    </div>
  );
};

const popupStyles = {
  container: {
    position: "fixed",
    top: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#e9e9e9",
    color: "#000",
    padding: "20px",
    zIndex: 1000,
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "700px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",  // Adicionando sombra ao contêiner
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  acceptButton: {
    backgroundImage: "linear-gradient(to right, var(--primaryColor), var(--secondColor))",
    transitionDuration: "300ms",
    paddingTop: "0.5rem",   
    paddingBottom: "0.5rem",
    paddingLeft: "1.5rem", 
    paddingRight: "1.5rem",
    borderRadius: "9999px",
    fontSize: "13px",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginLeft: "10px",
  },
  link: {
    color: "#000",
    textDecoration: "underline",
    marginLeft: "20px",
  },
};

export default Home;
