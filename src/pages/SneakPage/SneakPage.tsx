import Footer from "../../components/Footer/Footer";
import Header from "../../components/Hero/Header/Header";
import OneSneak from "../../components/OneSneak/OneSneak";

import styled from "./style.module.css";

const SneakPage = () => {
  return (
    <div className={styled.container}>
      <div className={styled.header}>
        <Header />
      </div>
      <div>
        <OneSneak />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default SneakPage;
