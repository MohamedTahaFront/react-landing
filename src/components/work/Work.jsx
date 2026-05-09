import { useState } from "react";
import "./work.css";
import tech1 from "../../assets/imgs/tech1.jpg";
import tech2 from "../../assets/imgs/tech2.jpg";
import tech3 from "../../assets/imgs/tech3.jpg";
import tech4 from "../../assets/imgs/tech4.jpg";
import tech5 from "../../assets/imgs/tech5.jpg";
import tech6 from "../../assets/imgs/tech6.jpg";
import tech7 from "../../assets/imgs/tech7.jpg";
import tech8 from "../../assets/imgs/tech8.jpg";

const Work = () => {
  const images = [tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8];
  const [active , setActive] = useState(null)
  return (
    <div className="Work" id="work">
      <h3 className=" font-24 m-18 align-center">OUR WORK</h3>
      <p className=" font-18 m-10 align-center">What we've done for people</p>
      <div className="container">
        {images.map((img ,index)=>{
          return (
        <div className={`image ${active === index ? "active" : ""}`} key={index} onClick={()=>setActive(index)}>
          <span className="close" onClick={(e)=>( e.stopPropagation() , setActive(null))}>Close</span>
          <img src={img} />
        </div>
          )
        })}
      </div>
    </div>
  );
};

export default Work;
