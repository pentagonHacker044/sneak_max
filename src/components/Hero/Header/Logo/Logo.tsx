import { useNavigate } from "react-router-dom";
import { MAIN_PAGE_ROUTE } from "../../../../router/routes";
import styled from "./style.module.css";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(MAIN_PAGE_ROUTE)}>
      <h2 className={styled.logo}>SneakMax</h2>
    </div>
  );
};
export default Logo;
