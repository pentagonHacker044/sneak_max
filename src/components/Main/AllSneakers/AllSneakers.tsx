import axios from "axios";
import { useEffect, useState } from "react";
import { SneakType } from "../../../interfaces";
import styled from "./style.module.css";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { useNavigate } from "react-router-dom";
import { SNEAK_PAGE_ROUTE } from "../../../router/routes";
import eye from "../../../imgs/icons/Show.svg";
import bucket from "../../../imgs/icons/bucket.svg";
import { useAppDispatch } from "../../../store/hooks";
import { addProduct } from "../../../store/productSlice";
import "./style.css"

const API_URL = "https://dd73021843adacf8.mokky.dev/sneakers?limit=";

const AllSneakers = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();


  // const [pagNumber, setPagNumber] = useState<number>(6);

  const [sneakers, setSneakers] = useState<SneakType[] | null>(null);

  const [min, setMin] = useState(1850);
  const [max, setMax] = useState(25768);

  const [size35, setSize35] = useState(false);
  const [size36, setSize36] = useState(false);
  const [size37, setSize37] = useState(false);
  const [size38, setSize38] = useState(false);
  const [size39, setSize39] = useState(false);
  const [size40, setSize40] = useState(false);
  const [size41, setSize41] = useState(false);
  const [size42, setSize42] = useState(false);
  const [size43, setSize43] = useState(false);

  const [man, setMan] = useState(true);
  const [woman, setWoman] = useState(true);

  async function getData(API_URL: string) {
    try {
      const res = await axios.get(API_URL);
      setSneakers(res.data.items);
      // console.log(res.data.items);
    } catch (error) {
      console.error("ERROR ->", error);
    }
  }


  let pagNumber = 9;

  const more = () => {
    const API_URL = "https://dd73021843adacf8.mokky.dev/sneakers?limit=";
    let pagNumber = 9;
    if (pagNumber === 9) {
      pagNumber = 18;
      getData(API_URL + pagNumber);
      return;
    }
  };

  useEffect(() => {
    getData(API_URL + pagNumber);
  }, []);

  const filter = () => {
    let gender = "";
    let sizes = "";

    if (man && !woman) {
      gender = "&gender=Мужской";
    } else if (!man && woman) {
      gender = "&gender=Женский";
    }

    if (size35) {
      sizes += "&sizes[]=35";
    }
    if (size36) {
      sizes += "&sizes[]=36";
    }
    if (size37) {
      sizes += "&sizes[]=37";
    }
    if (size38) {
      sizes += "&sizes[]=38";
    }
    if (size39) {
      sizes += "&sizes[]=39";
    }
    if (size40) {
      sizes += "&sizes[]=40";
    }
    if (size41) {
      sizes += "&sizes[]=41";
    }
    if (size42) {
      sizes += "&sizes[]=42";
    }
    if (size43) {
      sizes += "&sizes[]=43";
    }

    const API_URL =
      "https://dd73021843adacf8.mokky.dev/sneakers?limit=" +
      pagNumber +
      "&price[from]=" +
      min +
      "&price[to]=" +
      max +
      gender +
      sizes;
    getData(API_URL);
  };

  const reset = () => {
    const API_URL = "https://dd73021843adacf8.mokky.dev/sneakers?limit=";
    getData(API_URL + pagNumber);
  };

  // https://dd73021843adacf8.mokky.dev/sneakers

  return (
    <div className={styled.global}>
      <h2 className={styled.catalog} id="Katalog">
        Каталог
      </h2>
      <div className={styled.globalContainer}>
        <div className={styled.container}>
          <span className={styled.span}>Подбор по параметрам</span>
          <div className={styled.sliderContainer}>
            <div className={styled.priceContainer}>
              <span>Цена, руб</span>
              <div className={styled.sliderValue}>
                <div className={styled.min}>
                  <span>{min}</span>
                </div>
                <div className={styled.max}>
                  <span>{max}</span>
                </div>
              </div>
            </div>
            <div className={styled.slider}>
              <Nouislider
                range={{ min: 1850, max: 25768 }}
                start={[1850, 25768]}
                connect
                onUpdate={(slider) => {
                  setMin(Number(slider[0]));
                  setMax(Number(slider[1]));
                }}
              />
            </div>
          </div>
          <div className={styled.genderContainer}>
            <span>Пол</span>
            <div className={styled.genderCheck}>
              <label htmlFor="man">
                <input
                  type="checkbox"
                  checked={man}
                  onChange={() => setMan(!man)}
                  id="man"
                />
                мужской
              </label>
              <label htmlFor="woman">
                <input
                  type="checkbox"
                  checked={woman}
                  onChange={() => setWoman(!woman)}
                  id="woman"
                />
                женский
              </label>
            </div>
          </div>
          <div className={styled.sizeContainer}>
            <label htmlFor="35">
              <input
                type="checkbox"
                checked={size35}
                onChange={() => setSize35(!size35)}
                id="35"
              />
              <span>35</span>
            </label>

            <label htmlFor="36">
              <input
                type="checkbox"
                checked={size36}
                onChange={() => setSize36(!size36)}
                id="36"
              />
              <span>36</span>
            </label>

            <label htmlFor="37">
              <input
                type="checkbox"
                checked={size37}
                onChange={() => setSize37(!size37)}
                id="37"
              />
              <span>37</span>
            </label>

            <label htmlFor="38">
              <input
                type="checkbox"
                checked={size38}
                onChange={() => setSize38(!size38)}
                id="38"
              />
              <span>38</span>
            </label>

            <label htmlFor="39">
              <input
                type="checkbox"
                checked={size39}
                onChange={() => setSize39(!size39)}
                id="39"
              />
              <span>39</span>
            </label>

            <label htmlFor="40">
              <input
                type="checkbox"
                checked={size40}
                onChange={() => setSize40(!size40)}
                id="40"
              />
              <span>40</span>
            </label>

            <label htmlFor="41">
              <input
                type="checkbox"
                checked={size41}
                onChange={() => setSize41(!size41)}
                id="41"
              />
              <span>41</span>
            </label>

            <label htmlFor="42">
              <input
                type="checkbox"
                checked={size42}
                onChange={() => setSize42(!size42)}
                id="42"
              />
              <span>42</span>
            </label>

            <label htmlFor="43">
              <input
                type="checkbox"
                checked={size43}
                onChange={() => setSize43(!size43)}
                id="43"
              />
              <span>43</span>
            </label>
          </div>
          <button onClick={filter} className={styled.confirm}>
            Применить
          </button>
          <button onClick={reset} className={styled.reset}>
            cбросить
          </button>
        </div>
        <div className={styled.paginationContainer}>
          <div className={styled.sneakContainer}>
            {sneakers &&
              sneakers.map((item) => (
                <div key={item.id} className={styled.sneakCard}>
                  <div className={styled.product_image}>
                    <img
                      src={item.imgUrl}
                      alt="sneakPic"
                      className={styled.sneakImg}
                    />
                    <div className={styled.imgBtns}>
                      <button
                        onClick={() =>
                          navigate(SNEAK_PAGE_ROUTE + "/" + item.id)
                        }
                      >
                        <img src={eye} alt="" width="22px" />
                      </button>
                      <button onClick={() => dispatch(addProduct(item.id))}>
                        <img src={bucket} alt="" />
                      </button>
                    </div>
                  </div>
                  <h2 className={styled.title}>{item.title}</h2>
                  <p className={styled.eachPrice}>{item.price} р</p>
                </div>
              ))}
          </div>
          <button className={styled.paginationBtn} onClick={more}>
            Показать еще
          </button>
        </div>
      </div>
    </div>
  );
};
export default AllSneakers;
