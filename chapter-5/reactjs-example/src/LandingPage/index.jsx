import Faq from "../Faq";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./styles.module.css";

const LandingPage = () => (
  <>
    <div className={styles.header}>
      <Header />
    </div>
    <Faq />
    <Footer />
  </>
);

export default LandingPage;
