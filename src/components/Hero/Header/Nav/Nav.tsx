import styled from "./style.module.css";
import bucket from "../../../../imgs/icons/bucket.svg";
import Bucket from "./Bucket/Bucket";
import { useAppSelector } from "../../../../store/hooks";
import { useState } from "react";
import cn from "classnames";
import burger from "../../../../imgs/icons/burger.svg"
import darkBucket from "../../../../imgs/icons/darkBucket.svg"

const Nav = () => {
  const { items } = useAppSelector((state) => state.products);

  const [bucketActive, setBucketActive] = useState<"open" | "close">("close");
  const [isOpen, setIsOpen] = useState(false)

  const openBucket = () => {
    if (bucketActive === "close") {
      setBucketActive("open");
    } else {
      setBucketActive("close");
    }
  };

  // useEffect(() => {
  //   document.body.addEventListener("click", (event) => console.log(event));
  // }, []);

  return (
    <div className={styled.container}>
      <div className={isOpen ? styled.nav : styled.navClose}>
        <div className={styled.navContainer}>
          <a className={styled.navItem} href="#Katalog">
            Каталог
          </a>
          <a className={styled.navItem} href="#AboutUs">
            О нас
          </a>
          <a className={styled.navItem} href="#Podbor">
            Подобр товара
          </a>
          <a className={styled.navItem} href="#Team">
            Наша команда
          </a>
          <a className={styled.navItem} href="#Form">
            Доставка товара
          </a>
          <a className={styled.navItem} href="#Contacts">
            Контакты
          </a>
        </div>
        <div className={styled.bucket} onClick={openBucket}>
          <a className={styled.navItem} href="#">
            Корзина
          </a>
          <div className={styled.bucketCount}>
            <img className={styled.imgBucket} src={bucket} alt="" />
            <img className={styled.imgDarkBucket} src={darkBucket} alt="" />
            <span className={styled.countProducts}>{items.length}</span>
          </div>
          <div className={cn(styled.bucketContainer, styled[bucketActive])}>
            <Bucket />
          </div>
        </div>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className={styled.burgerButton}><img className={styled.burger} src={burger}/></button>
    </div>
  );
};
export default Nav;
