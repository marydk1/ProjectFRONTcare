import React, { useRef } from "react";
import styles from "../styles/Home.module.css";

const Carousel = () => {
  const trackRef = useRef(null);

  const handleScroll = () => {
    const track = trackRef.current;
    const inner = track.parentNode.querySelector(`.${styles.progressBarInner}`);
    const scrollWidth = track.scrollWidth - track.clientWidth;
    inner.style.width = `${(track.scrollLeft / scrollWidth) * 100}%`;
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack} ref={trackRef} onScroll={handleScroll}>
        <div className={styles.carouselItem}>
          <img src="/public/img/oil.jpg" alt="Product 1" />
          <p>Hair oil</p>
          <p>$20</p>
        </div>
        <div className={styles.carouselItem}>
          <img src="/public/img/gison.jpg"  alt="Product 2" />
          <p>Moisturizing conditioner</p>
          <p>$20</p>
        </div>
        <div className={styles.carouselItem}>
          <img src="/public/img/centy.jpg"  alt="Product 3" />
          <p>Serum</p>
          <p>$20</p>
        </div>
        <div className={styles.carouselItem}>
          <img src="/public/img/act.jpg"  alt="Product 4" />
          <p>Body scrub</p>
          <p>$20</p>
        </div>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressBarInner}></div>
      </div>
    </div>
  );
};

export default Carousel;
