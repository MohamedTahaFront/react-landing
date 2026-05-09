import "./Navbar.css";
import { FaUser } from "react-icons/fa";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false)

  return (
    <nav className="font-15">
      <a href="#" className="logo">
        Logo
      </a>

      <GiHamburgerMenu onClick={()=>setIsOpen(true)} className="menu"/>
      <ul className={isOpen?"active":""}>
        <li className="close">
          <a onClick={()=>setIsOpen(false)} className="font-18">close ×</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#team">
            <FaUser /> team
          </a>
        </li>
        <li>
          <a href="#work">
            <RiLayoutGrid2Fill /> work
          </a>
        </li>
        <li>
          <a href="#pricing">
            <FaDollarSign /> pricing
          </a>
        </li>
        <li>
          <a href="#contact">
            <FaEnvelope /> contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
