import Header from "../Header";
import Footer from "../Footer";
import styles from "./styles.module.css";

const LandingPage = () => (
  <>
    <div className={styles.headerContainer}>
      <Header />
    </div>
    <Footer />
  </>
);

export default LandingPage;
