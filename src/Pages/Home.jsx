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
        buttonText="Aceitar Todos"
        cookieName="myAwesomeCookieName2"
        style={popupStyles.container}
        buttonStyle={popupStyles.acceptButton}
        contentStyle={popupStyles.content}
        expires={15}
        disableStyles={true}
      >
        Este site usa cookies para melhorar a experiência do usuário. Ao clicar em “Aceitar todos”, você concorda com a nossa 
        <a href="/Privacidade" className="underline" style={popupStyles.link}>Política de Privacidade</a>
      </CookieConsent>
    </div>
  );
};

const popupStyles = {
  container: {
    position: "fixed",
    bottom: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#e9e9e9",
    color: "#000",
    padding: "1rem",
    zIndex: 1000,
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "90%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Adicionando sombra ao contêiner
    margin: "0 auto",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
  },
  acceptButton: {
    backgroundImage: "linear-gradient(to right, var(--primaryColor), var(--secondColor))",
    transitionDuration: "300ms",
    padding: "0.5rem 1.5rem",
    borderRadius: "9999px",
    fontSize: "13px",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "0.5rem",
  },
  link: {
    color: "#000",
    textDecoration: "underline",
  
  },
  // Media queries for different screen sizes
  "@media (min-width: 768px)": {
    container: {
      flexDirection: "row",
      padding: "1.5rem",
      maxWidth: "700px",
    },
    content: {
      flexDirection: "row",
    },
    link: {
      marginLeft: "0.5rem",
    },
    acceptButton: {
      marginLeft: "1rem",
    },
  },
};

export default Home;
