import { useEffect, useState } from "react";
import styled from "./style.module.css";
import { TeamType } from "../../../interfaces";
import axios from "axios";
import figure from "../../../imgs/icons/Group 72.svg";

const API_URL = "https://dd73021843adacf8.mokky.dev/teammates";

const Team = () => {
  const [team, setTeam] = useState<TeamType[] | null>(null);
  async function getTeammates() {
    try {
      const req = await axios.get(API_URL);
      setTeam(req.data);
    } catch (error) {
      console.error("ERROR->", error);
    }
  }
  useEffect(() => {
    getTeammates();
  }, []);
  return (
    <div className={styled.globalContainer} id="Team">
      <div className={styled.container}>
        <h2>Наша команда</h2>
        <div className={styled.teamContainer}>
          {team &&
            team.map((item) => (
              <div className={styled.teamCard} key={item.id}>
                <img src={item.imgUrl} alt="" />
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            ))}
        </div>
      </div>
      <div className={styled.bgFigure}>
        <img src={figure} alt="" />
      </div>
    </div>
  );
};
export default Team;
