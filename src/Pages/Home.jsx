import Hero from "../Components/Hero";
import Leads from "../Components/Leads";
import Menu from "../Components/Menu";
import Garantias from '../Components/Garantias'
import React from 'react'
import Services from "../Components/Serviços";


const Home = () =>{
    return(
        <>
        <Menu/>
        <Hero/>
        <Services/>
        <Leads/>
        <Garantias/>
        </>
    )
};

export default Home;