import "./Design.css";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import phone from "../../assets/imgs/phone.jpg"

const Design = () => {
  return (
    <div className="design">
      <div className="container">
        <div className="box">
          <h3 className="m-10 font-24">We know design.</h3>
          <p className="font-15 m-15">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <button className="btnTwo">
            <RiLayoutGrid2Fill style={{fontSize:"24px"}}/> View Our Works
          </button>
        </div>
        <img src={phone} alt="" />
      </div>
    </div>
  );
};

export default Design;
