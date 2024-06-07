import Hero from "../Components/Hero";
import Leads from "../Components/Leads";
import Menu from "../Components/Menu";

import React from 'react'
import Services from "../Components/Serviços";


const Home = () =>{
    return(
        <>
        <Menu/>
        <Hero/>
        <Services/>
        <Leads/>
        <Services/>
        </>
    )
};

export default Home;