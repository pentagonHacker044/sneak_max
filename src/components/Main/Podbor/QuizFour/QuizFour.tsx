import styled from "./style.module.css";

const QuizFour = () => {
  return (
    <div className={styled.globalContainer}>
      <div className={styled.podborIsReadyText}>
        <h2>Ваша подборка готова!</h2>
        <p>
          Оставьте свои контактные данные, чтобы бы мы могли отправить
          подготовленный для вас каталог
        </p>
      </div>
      <div className={styled.quizFormContainer}>
        <h3>Получить предложение</h3>
        <span>Получите подборку подходящих для вас моделей на почту</span>
        <form action="" className={styled.quizForm}>
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="E-mail" />
          <button type="submit">Получить</button>
        </form>
      </div>
    </div>
  );
};
export default QuizFour;
