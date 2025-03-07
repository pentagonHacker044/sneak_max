import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SneakType } from "../../interfaces";
import styled from "./style.module.css";
import arrow from "../../imgs/icons/Galochka.svg";
import Modal from "../Modal/Modal";
import OfferPopup from "./OfferPopup/OfferPopup";

const OneSneak = () => {
  const [sneak, setSneak] = useState<SneakType | null>(null);
  const [active, setActive] = useState<"enable" | "disable">("disable");
  const [openModal, setOpenModal] = useState(false)

  const handleActive = (index: any) => {
    if (index.active === "enable") {
      setActive("disable");
    } else if (index.active === "disable") {
      setActive("enable")
    }
  };

  const params = useParams();
  let sneakId = params.id;

  useEffect(() => {
    const API_URL = "https://dd73021843adacf8.mokky.dev/sneakers/" + sneakId;
    async function getData(API_URL: string) {
      try {
        const res = await axios.get(API_URL);
        setSneak(res.data);
      } catch (error) {
        console.error("ERROR ->", error);
      }
    }
    getData(API_URL);
  }, []);

  return (
    <div className={styled.globalContainer}>
      {sneak && (
        <div className={styled.globalContainer}>
          <div className={styled.container}>
            <div className={styled.topContainer}>
              <div className={styled.img}>
                <img src={sneak.imgUrl} alt="" />
              </div>
              <div className={styled.specific}>
                <div className={styled.quote}>
                  <span>Код товара: {sneak.vendorСode}</span>
                  <span>В наличии: {sneak.inStock}шт</span>
                </div>
                <div>
                  <h2 className={styled.title}>{sneak.title}</h2>
                </div>
                <div className={styled.stars}>
                  <p>
                    {sneak.stars === 5
                      ? "★ ★ ★ ★ ★"
                      : sneak.stars === 4
                      ? "★ ★ ★ ★"
                      : sneak.stars === 3
                      ? "★ ★ ★"
                      : "★ ★"}
                  </p>
                </div>
                <div className={styled.sizesContainer}>
                  <p>Выберите размер</p>
                  <div className={styled.sizes}>
                    {sneak?.sizes.map((el, index) => (
                      <div onClick={() => handleActive(index)} className={styled[active]} key={el}>
                        {el}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styled.priceContainer}>
                  <h2 className={styled.price}>{sneak.price}</h2>
                  <span className={styled.oldPrice}>{sneak.oldPrice}</span>
                </div>
                <div>
                  <button onClick={() => setOpenModal(true)} className={styled.buyBtn}>Заказать</button>
                </div>
                <Modal open={openModal} setOpen={setOpenModal}>
                  <div>
                    <OfferPopup sneak={sneak}/>
                  </div>
                </Modal>
                <div className={styled.dopInfoContainer}>
                  <div className={styled.dopInfo}>
                    <img src={arrow} alt="" />
                    <p>Бесплатная доставка</p>
                  </div>
                  <div className={styled.dopInfo}>
                    <img src={arrow} alt="" />
                    <p>Оплата заказа при получении</p>
                  </div>
                  <div className={styled.dopInfo}>
                    <img src={arrow} alt="" />
                    <p>Обмен в течении двух недель</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styled.botContainer}>
              <div className={styled.description}>
                <h2>Описание</h2>
                <p>{sneak.description}</p>
              </div>
              <div className={styled.character}>
                <h2>Характеристики</h2>
                <div className={styled.characterContainer}>
                  <p>Пол: {sneak.gender}</p>
                  <p>Цвета: {sneak.color}</p>
                  <p>Состав: {sneak.compound}</p>
                  <p>Страна: {sneak.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default OneSneak;
