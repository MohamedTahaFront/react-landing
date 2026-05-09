import "./Contact.css";
import map from "../../assets/imgs/map.jpg";
import { IoIosSend } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    if (
      contact.name === "" ||
      contact.email === "" ||
      contact.subject === "" ||
      contact.message === ""
    ) {
      alert("اكمل جميع الخانات");
    } else {
      alert("sending");
    }
  };
  return (
    <div className=" contact " id="contact">
      <h3 className=" font-24 m-18 align-center">CONTACT</h3>
      <p className=" font-18 m-10 align-center">
        Lets get in touch. Send us a message:
      </p>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <li style={{ display: "flex", alignItems: "center" }}>
          <FaMapMarkerAlt style={{ marginRight: "16px", fontSize: "32px" }} />{" "}
          Chicago, US
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <FaPhoneAlt style={{ marginRight: "16px", fontSize: "32px" }} />{" "}
          Phone: +00 151515
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <MdEmail style={{ marginRight: "16px", fontSize: "32px" }} /> Email:
          mail@mail.com
        </li>
      </ul>
      <form onSubmit={handelSubmit}>
        <input
          onChange={(e) =>
            setContact((prev) => ({ ...prev, name: e.target.value }))
          }
          value={contact.name}
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          onChange={(e) =>
            setContact((prev) => ({ ...prev, email: e.target.value }))
          }
          value={contact.email}
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={(e) =>
            setContact((prev) => ({ ...prev, subject: e.target.value }))
          }
          value={contact.subject}
          type="text"
          placeholder="Subject"
          name="subject"
        />
        <textarea
          onChange={(e) =>
            setContact((prev) => ({ ...prev, message: e.target.value }))
          }
          value={contact.message}
          placeholder="Message"
          name="message"
        ></textarea>
        <button className="btnTwo font-15" type="submit">
          <IoIosSend style={{ fontSize: "24px" }} /> SEND MESSAGE
        </button>
      </form>
      <img src={map} />
    </div>
  );
};

export default Contact;
