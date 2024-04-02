import React from "react";
import "../styles/peças.css"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PeçasC from "../components/peças/PeçasC";
import HeaderM from "../components/header/headerM";
import PecasV from "../components/peças/PecasV";


function Peças () {
    return (
        <div className="pecas">
            <div className="headerP"><Header/></div>
            <div className="headerPM"><HeaderM/></div>
            <PeçasC/>
            <PecasV/>
            <Footer/>
        </div>
    )
}
export default Peças;