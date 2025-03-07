import Header from "./Header/Header";
import styled from "./style.module.css";
import Title from "./Title/Title";

const Hero = () => {
  return (
    <>
      <div className={styled.container}>
      {/* <div className={styled.bgText}>
        <h1 className={styled.h1}>SneakMax</h1>
      </div> */}
        <div className={styled.header}>
          <Header />
        </div>
        <div className={styled.title}>
          <Title />
        </div>
      </div>
    </>
  );
};
export default Hero;
