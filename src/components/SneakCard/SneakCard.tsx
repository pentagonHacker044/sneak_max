// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { SneakType } from "../../interfaces";
import styled from "./style.module.css";



const SneakCard: React.FC<any> = ({ title, imgUrl, price }) => {
  return (
    <div className={styled.globalContainer}>
      <div className={styled.globalContainer}>
        <div className={styled.container}>
          <div>
            <img src={imgUrl} alt="" />
          </div>
          <div className={styled.midle}>
            <span>{title}</span>
            <span>{price} Р</span>
          </div>
          <div>мусор</div>
        </div>
      </div>
    </div>
  );
};
export default SneakCard;
