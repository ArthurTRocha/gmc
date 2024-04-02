import React from "react";
import "../styles/home.css"
import Header from "../components/header/Header";
import HeaderM from "../components/header/headerM";
import Footer from "../components/footer/Footer";
import AgroIndustria from "../components/componentesHome/agroIndustria";
import BunerPai from "../components/componentesHome/BunerPai";
import Introducao from "../components/componentesHome/Introducao";
import PecasHPai from "../components/componentesHome/PecasHPai"
import Oferecemos from "../components/componentesHome/Oferecemos";
import Servico from "../components/componentesHome/Servico"
import Contato from "../components/componentesHome/Contato";

function Home () {
    return (
        <div className="home">
            <div className="headerP"><Header/></div>
            <div className="headerPM"><HeaderM/></div>
            <BunerPai/>
            <Introducao/>
            <AgroIndustria/>
            <PecasHPai/>
            <Oferecemos/>
            <Servico/>
            <Contato/>
            <Footer/>
        </div>
    )
}
export default Home;