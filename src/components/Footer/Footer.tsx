import styled from "./style.module.css"

const Footer = () => {
  return (
    <div className={styled.globalContainer}>
      <div className={styled.container}>
        <div className={styled.logo}>
          <h2>SneakMax</h2>
        </div>
        <div className={styled.navContainer}>
          <a href="#Katalog">Каталог</a>
          <a href="#AboutUs">О нас</a>
          <a href="#Podbor">Подбор товара</a>
          <a href="#Team">Наша команда</a>
          <a href="#Form">Доставка и оплата</a>
          <a href="#Contacts">Контакты</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
