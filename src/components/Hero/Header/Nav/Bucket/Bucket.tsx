import styled from "./style.module.css";
import { useAppSelector } from "../../../../../store/hooks";
// import SneakCard from "../../../../SneakCard/SneakCard";
// import { useEffect, useState } from "react";
// import { SneakType } from "../../../../../interfaces";
// import axios from "axios";

const Bucket: React.FC = () => {

// const LIST_PRODUCTS = useAppSelector(state => state.products.items)

const {totalPrice} = useAppSelector(state => state.products)

// const [sneak, setSneak] = useState<SneakType | null>(null);

  // const params = useParams();
  // let sneakId = params.id;

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const API_URL = "https://dd73021843adacf8.mokky.dev/sneakers/";
  //   async function getData(API_URL: string) {
  //     try {
  //       const res = await axios.get(API_URL);
  //       setSneak(res.data);
  //     } catch (error) {
  //       console.error("ERROR ->", error);
  //     }
  //   }
  //   getData(API_URL);
  // }, []);

  return (
    <div>
      <div className={styled.container}>
        <div className={styled.productList}>
          {/* {LIST_PRODUCTS.map((item) => <SneakCard key={item.id} {...sneak}/>)} */}
        </div>
        <div className={styled.bottomContainer}>
          <div className={styled.totalContainer}>
            <span className={styled.total}>Итого:</span>
            <span className={styled.totalPrice}>{totalPrice}</span>
          </div>
          <div className={styled.goToBucket}>
            <button>Перейти в корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bucket;
