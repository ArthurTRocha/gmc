import { useEffect, useRef, useState } from "react";
import "./headerm.css"
import { Link } from "react-router-dom";
import menu from "../../assets/images/menu.png"
import munum from "../../assets/images/menum.png"
import logo1 from "../../assets/images/logo1.png"
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function HeaderM () {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
    const menuRef = useRef(null);
  
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuVisible(false); // corrigido aqui
        }
      };
  
      document.addEventListener('click', handleOutsideClick);
  
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [menuRef]);
  
  
   

    
    return (
        <div className="headerM">
        <div className="menuIcon" onClick={toggleMenu} ref={menuRef}>
        <img src={menu} alt="Menu" className="IconMenuHeaderMobile"/>
      </div>

      {menuVisible && (
        <div className="mobileMenu">
          <ul>
            <li>
              <img src={munum} alt="Engrenagem" />
              <Link to="/home">Inicio</Link>
            </li>
            <li>
            <img src={munum} alt="Engrenagem" />
              <Link to="/peças">Peças</Link>
            </li>
            <li>
            <img src={munum} alt="Engrenagem" />
            <Link to="/servicos">Serviços</Link>
            </li>
            <li>
            <img src={munum} alt="Engrenagem" />
              <Link to="/sobrenos">Sobre Nós</Link>
            </li>
            <li>
            <img src={munum} alt="Engrenagem" />
            <Link to="/trabalheconosco">Trabalhe Conosco</Link>
            </li>
          </ul>
          <div className="redesociaisHeaderM">
          <a href="https://www.linkedin.com/company/gmc-industrial/about/" target="blanck"><FaLinkedin className="iconContatoHM"/> </a>
            <a href="http://instagram.com/gmcindustrial" target="blanck"><FaInstagram className="iconContatoHM"/> </a>
            <a href="https://api.whatsapp.com/send?phone=5531990872160" target="_blank"><FaWhatsapp className="iconContatoHM"/> </a>
            <a href="http://facebook.com/gmcindustrial" target="blanck"><FaFacebook className="iconContatoHM"/> </a>
          </div>
          <div className="logoHeaderMobile">
            <img src={logo1} alt="Logo" />
          </div>
        </div>
      )}



        </div>
    )
}
export default HeaderM;
