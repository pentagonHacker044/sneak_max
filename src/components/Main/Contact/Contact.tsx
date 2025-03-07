import styled from "./styled.module.css";

import vk from "../../../imgs/icons/VK.svg";
import inst from "../../../imgs/icons/Instagram.svg";

const Contact = () => {
  return (
    <div className={styled.globalContainer}  id="Contacts">
      <div className={styled.container}>
        <div className={styled.contactsContainer}>
          <h2>Котакты</h2>
          <div className={styled.mainOfice}>
            <p className={styled.ofice}>ГЛАВНЫЙ ОФИС</p>
            <p className={styled.number}>+7 800 789 89 89</p>
            <p className={styled.address}>г. Санкт-Петербург, Комсомольская, 43 к1</p>
          </div>
          <div className={styled.mainOfice}>
            <p className={styled.ofice}>ОТДЕЛ ПРОДАЖ</p>
            <p className={styled.number}>+7 800 789 89 89</p>
            <p className={styled.address}>г. Санкт-Петербург, Комсомольская, 43 к1</p>
          </div>
          <div className={styled.socialContainer}>
            <div className={styled.social}>
              <img src={vk} alt="" />
            </div>
            <div className={styled.social}>
              <img src={inst} alt="" />
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af179d16c901e1f9f4290d87636984cf2796a0bf22465c8721d957dca3f819734&amp;source=constructor"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contact;
