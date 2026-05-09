import "./Team.css";
import { FaEnvelope } from "react-icons/fa";
import team1 from "../../assets/imgs/team2.jpg";
import team2 from "../../assets/imgs/team1.jpg";
import team3 from "../../assets/imgs/team3.jpg";
import team4 from "../../assets/imgs/team4.jpg";

const Team = () => {
  const dataTeam = [
    { team: team1, name: "John Doe", job: "CEO & Founder" },
    { team: team2, name: "Anja Doe", job: "Art Director" },
    { team: team3, name: "Mike Ross", job: "Web Designer" },
    { team: team4, name: "Dan Star", job: "Designer" },
  ];
  return (
    <div className="team" id="team">
      <h3 className=" font-24 m-18 align-center">THE TEAM</h3>
      <p className=" font-18 m-10 align-center">
        The ones who runs this company
      </p>
      <div className="container">
        {dataTeam.map((person, i) => {
          return (
            <div className="card" key={i}>
              <img src={person.team} alt={person.name} />
              <div className="card-body">
                <h3 className=" font-24">{person.name}</h3>
                <p className=" opacity font-15">{person.job}</p>
                <p className=" font-15">
                  Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                  sodales pellentesque elementum
                </p>
                <button className="btn">
                  <FaEnvelope /> Contact
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
