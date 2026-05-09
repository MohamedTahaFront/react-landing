import "./Footer.css";
import { FaArrowUp } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="btn top">
        <FaArrowUp /> To the top
      </a>

      <div className="icons m-15">
        <a href="#">
          <ImFacebook2 />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaSnapchat />
        </a>
        <a href="#">
          <FaPinterestP />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
