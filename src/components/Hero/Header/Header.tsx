import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import styled from "./style.module.css"

const Header = () => {
return (
 <div className={styled.container}>
    <Logo />
    <Nav />
  </div>
)
}
export default Header;