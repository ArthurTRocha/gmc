import React from "react";
import "./servico.css"
import ServicoC from "./ServicoC";
import { AiFillShopping } from "react-icons/ai";

function Servico () {
    return (
        <div className="servico">
        <AiFillShopping className="AiFillShoppingServico"/>
            <ServicoC/>
        </div>
    )
}
export default Servico;