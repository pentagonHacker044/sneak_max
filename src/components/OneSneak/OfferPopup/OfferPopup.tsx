import { SneakType } from "../../../interfaces";
import styled from "./style.module.css";

type TSneakProps = {
  sneak: SneakType;
};

const OfferPopup: React.FC<TSneakProps> = ({ sneak }) => {
  return (
    <div className={styled.containerPopup}>
      <div className={styled.container}>
        <div className={styled.titlePopup}>
          <h2>Оформление заказа</h2>
          <span>Заказ 345667</span>
        </div>
        <div className={styled.offerSneakContainer}>
          <h2>{sneak.title}</h2>
          <div className={styled.imgSneakContainer}>
            <img src={sneak.imgUrl} alt="" />
          </div>
          <div className={styled.checkboxContainer}>
            <span>Выберите размер</span>
            <div className={styled.sizesMap}>
              {sneak.sizes.map((el) => (
                <div key={el} className={styled.elContainer}>
                  <input type="checkbox" id="sizes" />
                  <div className={styled.el}>{el}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styled.offerPriceContainer}>
            <span className={styled.offerPrice}>Цена:</span>
            <span className={styled.offerSneakPrice}>{sneak.price}р</span>
          </div>
        </div>
        <div className={styled.inputsPopup}>
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Номер телефона" />
          <input type="text" placeholder="E-mail " />
        </div>
      </div>
      <button type="submit" className={styled.btn}>
        Оформить заказ
      </button>
    </div>
  );
};
export default OfferPopup;
