import "./About.css"
import { HiComputerDesktop } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

const About = () => {
  return (
    <div className="about" id="about">
      <h3 className="font-24 m-18">ABOUT THE COMPANY</h3>
      <p className="font-18 m-10">Key features of our company</p>
      <div className="container">
        <div className="box">
          <HiComputerDesktop/>
          <h3 className="m-18 font-18">Responsive</h3>
          <p className="m-15 font-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
        <div className="box">
          <FaHeart/>
          <h3 className="m-18 font-18">Passion</h3>
          <p className="m-15 font-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
        <div className="box">
          <IoDiamondOutline/>
          <h3 className="m-18 font-18">Design</h3>
          <p className="m-15 font-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
        <div className="box">
          <IoSettingsSharp/>
          <h3 className="m-18 font-18">Support</h3>
          <p className="m-15 font-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
      </div>
    </div>
  )
}

export default About