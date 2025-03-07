import AboutUs from "./AboutUs/AboutUs";
import Accordion from "./Accordion/Accordion";
import AllSneakers from "./AllSneakers/AllSneakers";
import Contact from "./Contact/Contact";
import Form from "./Form/Form";
import Podbor from "./Podbor/Podbor";
import Team from "./Team/Team";
import styled from "./style.module.css"

const Main = () => {
return (
 <div className={styled.main}>
    {/* FILTER */}
    <AllSneakers />
    <AboutUs />
    <Podbor />
    <Team />
    <Accordion />
    <Contact />
    <Form />
  </div>
)
}
export default Main;