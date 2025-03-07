import styled from "./style.module.css"

const Title = () => {
  return (
      <div className={styled.container}>
        <h3 className={styled.h3}>Кроссовки известных брендов с доставкой по России и СНГ</h3>
        <p className={styled.p}>
          Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
          многие другие по низким ценам
        </p>
        <a href="#Katalog" className={styled.btn}>Перейти к покупкам</a>
      </div>
  );
};
export default Title;
