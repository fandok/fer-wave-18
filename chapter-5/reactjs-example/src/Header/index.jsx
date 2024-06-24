import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import styles from "./styles.module.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.block} />
        <div className={styles.navigation}>
          <div>Our Services</div>
          <div>Why Us</div>
          <div>Testimonial</div>
          <div>FAQ</div>
        </div>
        <img
          onClick={handleOpen}
          width={24}
          height={24}
          className={styles.menu}
          src="/icons/icon-menu.svg"
          alt="menu"
        />
      </div>
      <Offcanvas
        className={styles.offcanvas}
        direction="end"
        isOpen={isOpen}
        toggle={handleOpen}
      >
        <OffcanvasHeader className={styles.offcanvasHeader} toggle={handleOpen}>
          BCR
        </OffcanvasHeader>
        <OffcanvasBody>
          <div className={styles.offcanvasBody}>Our Services</div>
          <div className={styles.offcanvasBody}>Why Us</div>
          <div className={styles.offcanvasBody}>Testimonial</div>
          <div className={styles.offcanvasBody}>FAQ</div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default Header;
