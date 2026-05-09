import "./Skills.css"
import { FaCamera } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

const Skills = () => {
  return (
    <div className="Skills">
      <div className="container">
        <div className="info">
          <h3 className="m-10 font-24">Our Skills.</h3>
          <p className="m-15 font-15">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <p className="m-15 font-15">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="details">
            <div className="row">
                <p><FaCamera/> Photography</p>
                <div>
                    <span style={{width:"90%"}}>90%</span>
                </div>
            </div>
            <div className="row">
                <p><HiComputerDesktop/> Web Design</p>
                <div>
                    <span style={{width:"85%"}}>85%</span>
                </div>
            </div>
            <div className="row">
                <p><MdOutlinePhotoSizeSelectActual/> Photography</p>
                <div>
                    <span style={{width:"75%"}}>75%</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
