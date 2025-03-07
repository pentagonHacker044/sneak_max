import styled from "./style.module.css";
import kindSize from "../../../../imgs/pictures/kindSize.png";

const QuizTwo = () => {
  return (
    <div>
      <div className={styled.containerSecond}>
        <h2>Какой размер вам подойдет?</h2>
        <div className={styled.checkboxContainer}>
          <label htmlFor="smaller36">
            <input type="checkbox" id="smaller36" />
            <span>менее 36</span>
          </label>
          <label htmlFor="36-38">
            <input type="checkbox" id="36-38" />
            <span>36-38</span>
          </label>
          <label htmlFor="39-41">
            <input type="checkbox" id="39-41" />
            <span>39-41</span>
          </label>
          <label htmlFor="42-44">
            <input type="checkbox" id="42-44" />
            <span>42-44</span>
          </label>
          <label htmlFor="45_and_bigger">
            <input type="checkbox" id="45_and_bigger" />
            <span>45 и больше</span>
          </label>
        </div>
        <div>
          <img src={kindSize} alt="" />
        </div>
      </div>
    </div>
  );
};
export default QuizTwo;
