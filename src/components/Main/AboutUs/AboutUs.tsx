import styled from "./style.module.css";
import figure from "../../../imgs/icons/figure.svg";
import mask from "../../../imgs/pictures/Mask Group.png";

const AboutUs = () => {
  return (
    <div className={styled.container} id="AboutUs">
      <div>
        <img className={styled.figure} src={figure} alt="" />
      </div>
      <div className={styled.textContainer}>
        <h2 className={styled.h2}>Пара слов о нас</h2>
        <p className={styled.p}>
          Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт
          мы можем менять жизни. В том числе с помощью воодушевляющих историй
          спортсменов. Чтобы помочь тебе подняться и двигаться вперед.{" "}
        </p>
        <h2 className={styled.logo}>SneakMax</h2>
      </div>
      <div>
        <img className={styled.img} src={mask} alt="" />
      </div>
    </div>
  );
};
export default AboutUs;
