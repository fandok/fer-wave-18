import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

const SETTINGS = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

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

const Carousel = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.testimonialTitle}>Testimonial</div>
      <div className={styles.testimonialDesc}>
        Berbagai review positif dari para pelanggan kami
      </div>
      <Slider
        {...SETTINGS}
        className={styles.carousel}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        <CarouselItem />
        <CarouselItem />
        <CarouselItem woman />
      </Slider>
      <div className={styles.carouselPagination}>
        <img
          onClick={previous}
          className={styles.paginationButton}
          src="/left.png"
          alt="left-button"
        />
        <img
          onClick={next}
          className={styles.paginationButton}
          src="/right.png"
          alt="right-button"
        />
      </div>
    </div>
  );
};

export default Carousel;
