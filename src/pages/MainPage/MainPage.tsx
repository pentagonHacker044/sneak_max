import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";

const MainPage = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <main>
        <div>
          <Main />
        </div>
      </main>
      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
