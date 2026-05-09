import "./Header.css";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="box">
        <h1 className="font-64">Start something that matters</h1>
        <p className="font-18">
          Stop wasting valuable time with projects that just isn't you.
        </p>
        <button className="font-18">Learn more and start today</button>
      </div>
      <div className="icons">
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
    </header>
  );
};

export default Header;
