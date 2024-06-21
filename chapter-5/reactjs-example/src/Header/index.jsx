import styles from "./styles.module.css";

const Header = () => (
  <div className={styles.header}>
    <div className={styles.block} />
    <div className={styles.navigation}>
      <div>Our Services</div>
      <div>Why Us</div>
      <div>Testimonial</div>
      <div>FAQ</div>
    </div>
  </div>
);

export default Header;
