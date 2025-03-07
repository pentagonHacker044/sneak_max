import styled from "./style.module.css";
import typeSneakPhoto from "../../../../imgs/pictures/фото кроссовка.png";

const QuizOne = () => {
  return (
    <div>
      <div className={styled.kindSneak}>
        <p>Какой тип кроссовок рассматриваете</p>
        <div className={styled.typeContainer}>
          <label htmlFor="ked">
            <img src={typeSneakPhoto} alt="" className={styled.typeImg} />
            <div>
              <input type="checkbox" id="ked" />
              <span>кеды</span>
            </div>
          </label>
          <label htmlFor="sport">
            <img src={typeSneakPhoto} alt="" className={styled.typeImg} />
            <div>
              <input type="checkbox" id="sport" />
              <span>спортивные</span>
            </div>
          </label>
          <label htmlFor="run">
            <img src={typeSneakPhoto} alt="" className={styled.typeImg} />
            <div>
              <input type="checkbox" id="run" />
              <span>беговые</span>
            </div>
          </label>
          <label htmlFor="walk">
            <img src={typeSneakPhoto} alt="" className={styled.typeImg} />
            <div>
              <input type="checkbox" id="walk" />
              <span>для прогулок</span>
            </div>
          </label>
          <label htmlFor="botinki">
            <img src={typeSneakPhoto} alt="" className={styled.typeImg} />
            <div>
              <input type="checkbox" id="botinki" />
              <span>ботинки</span>
            </div>
          </label>
          <label htmlFor="tufl">
            <img src={typeSneakPhoto} alt="" className={styled.typeImg} />
            <div>
              <input type="checkbox" id="tufl" />
              <span>туфли</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
export default QuizOne;
