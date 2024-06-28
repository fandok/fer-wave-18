import Header from "../Header";
import Footer from "../Footer";
import styles from "./styles.module.css";
import Carousel from "../Carousel";

const LandingPage = () => (
  <>
    <div className={styles.headerContainer}>
      <Header />
    </div>
    <Carousel />
    <Footer />
  </>
);

export default LandingPage;
