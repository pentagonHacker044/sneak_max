import { useState } from "react";
import styled from "./style.module.css";
import plus from "../../../imgs/icons/plus.svg";

const Accordion = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const ques = [
    {
      id: 1,
      name: "Вопрос 1",
      answ: "А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми!",
    },
    {
      id: 2,
      name: "Вопрос 2",
      answ: "А это ответ 2: у нас в магазине вы найдете кроссовки не только для себя, но и для всей семьи!",
    },
  ];

  const handleClick = (id: number) => {
    if (id === openId) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };
  return (
    <div className={styled.globalContainer} id="Questions">
      <div className={styled.container}>
        <h2>Часто задаваемые вопросы</h2>
        {ques.map((item, id: number) => (
          <div
            onClick={() => handleClick(id)}
            key={item.id}
            className={styled.accordionCard}
          >
            <div className={styled.accordion}>
              <h3>{item.name}</h3>
              <img
                src={plus}
                alt=""
                className={id === openId ? styled.plusClose : styled.plus}
              />
            </div>
            <div className={id === openId ? styled.open : styled.close}>
              <p>{item.answ}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordion;
