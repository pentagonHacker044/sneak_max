import styled from "./style.module.css";
import { changeQuizValue } from "../../../store/quizSlice";
import backArrow from "../../../imgs/icons/back.png";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import QuizOne from "./QuizOne/QuizOne";
import QuizTwo from "./QuizTwo/QuizTwo";
import QuizThree from "./QuizThree/QuizThree";
import QuizFour from "./QuizFour/QuizFour";

const Podbor = () => {
  let quizValue = useAppSelector((state) => state.quiz.quizValue);

  const dispatch = useAppDispatch();

  return (
    <div className={styled.globalContainer} id="Podbor">
      <div className={styled.containerFirst}>
        {quizValue != "section_four" && (
          <div className={styled.title}>
            <h2>Мы подберем идеальную пару для вас</h2>
            <p>
              Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
              для вас моделями{" "}
            </p>
          </div>
        )}
        <div className={styled.quizSneak}>
          {quizValue === "section_one" ? (
            <>
              <QuizOne />
              <div className={styled.nextStep}>
                <div className={styled.numberStep}>1 из 3</div>
                <div className={styled.btnsQuiz}>
                  <button
                    className={styled.backArrowBtn}
                    onClick={() => dispatch(changeQuizValue("section_one"))}
                  >
                    <img src={backArrow} alt="" />
                  </button>
                  <button
                    className={styled.nextStepBtn}
                    onClick={() => dispatch(changeQuizValue("section_two"))}
                  >
                    Следующий шаг
                  </button>
                </div>
              </div>
            </>
          ) : quizValue === "section_two" ? (
            <div className={styled.kindSize}>
              <QuizTwo />
              <div className={styled.nextStep}>
                <div className={styled.numberStep}>2 из 3</div>
                <div className={styled.btnsQuiz}>
                  <button
                    className={styled.backArrowBtn}
                    onClick={() => dispatch(changeQuizValue("section_one"))}
                  >
                    <img src={backArrow} alt="" />
                  </button>
                  <button
                    className={styled.nextStepBtn}
                    onClick={() => dispatch(changeQuizValue("section_three"))}
                  >
                    Следующий шаг
                  </button>
                </div>
              </div>
            </div>
          ) : quizValue === "section_three" ? (
            <>
              <QuizThree />
              <div className={styled.nextStep}>
                <div className={styled.numberStep}>3 из 3</div>
                <div className={styled.btnsQuiz}>
                  <button
                    className={styled.backArrowBtn}
                    onClick={() => dispatch(changeQuizValue("section_one"))}
                  >
                    <img src={backArrow} alt="" />
                  </button>
                  <button
                    className={styled.nextStepBtn}
                    onClick={() => dispatch(changeQuizValue("section_four"))}
                  >
                    Следующий шаг
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styled.containerFour}>
                <QuizFour />
                <button
                  className={styled.backArrowBtn}
                  onClick={() => dispatch(changeQuizValue("section_one"))}
                >
                  <img src={backArrow} alt="" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Podbor;
