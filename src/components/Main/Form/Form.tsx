import styled from "./style.module.css";
import instLogo from "../../../imgs/pictures/1024px-Instagram_logo 1.png";
import photoGroup from "../../../imgs/pictures/Group 61.png";

const Form = () => {
  return (
    <div className={styled.globalContainer} id="Form">
      <div className={styled.container}>
        <div className={styled.formContainer}>
          <div className={styled.textContainer}>
            <h2>Есть вопросы?</h2>
            <p>Заполните форму и наш менеджер свяжется с вами</p>
          </div>
          <div className={styled.inputContainer}>
            <form action="">
              <input type="text" placeholder="Ваше имя" />
              <input type="text" placeholder="Номер телефона" />
              <button>Отправить</button>
            </form>
          </div>
        </div>
        <div className={styled.instContainer}>
          <div>
            <img className={styled.instLogo} src={instLogo} alt="" />
          </div>
          <div>
            <img className={styled.photoGroup} src={photoGroup} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
