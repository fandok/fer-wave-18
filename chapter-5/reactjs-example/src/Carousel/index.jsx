import styles from "./styles.module.css";

const CarouselItem = ({ woman = false }) => (
  <div className={styles.carouselItem}>
    <img
      src={woman ? "/profile-woman.png" : "/profile.png"}
      alt={`profile${woman ? "-woman" : ""}`}
    />
    <div>
      <img className={styles.itemStars} src="/stars.png" alt="stars" />
      <div className={styles.itemQuotes}>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
      </div>
      <div>John Dee 32, Bromo</div>
    </div>
  </div>
);

const Carousel = () => (
  <div className={styles.carouselContainer}>
    <div className={styles.testimonialTitle}>Testimonial</div>
    <div className={styles.testimonialDesc}>
      Berbagai review positif dari para pelanggan kami
    </div>
    <div className={styles.carousel}>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem woman />
    </div>
    <div className={styles.carouselPagination}>
      <img
        className={styles.paginationButton}
        src="/left.png"
        alt="left-button"
      />
      <img
        className={styles.paginationButton}
        src="/right.png"
        alt="right-button"
      />
    </div>
  </div>
);

export default Carousel;
