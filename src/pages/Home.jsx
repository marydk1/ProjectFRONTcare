import React, { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { useNavigate, Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { FaLeaf, FaTint, FaFire, FaSyncAlt, FaSpa, FaQuestion } from "react-icons/fa";

const Home = () => {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const toggleCart = () => setShowCart(prev => !prev);

  return (
    <>
      {/* АДАПТИВНИЙ БЛОК ДЛЯ МОБІЛЬНИХ ПРИСТРОЇВ */}
      <style>{`
        @media (max-width: 768px) {
          .${styles.aboutUsContainer}, 
          .${styles.categoriesContainer}, 
          .${styles.leftSmallRightBigContainer},
          .${styles.categoriesImages} {
            flex-direction: column !important;
            align-items: center !important;
            gap: 25px !important;
            padding: 10px !important;
          }

          .${styles.aboutUsContent} h2, .${styles.bigText} {
            font-size: 26px !important;
            text-align: center !important;
          }

          .${styles.aboutUsImage} img, 
          .${styles.bigPhoto}, 
          .${styles.smallPhoto},
          .${styles.skinTypesImage},
          .${styles.categoryItem} img {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            margin-left: 0 !important;
          }

          /* ВИПРАВЛЕННЯ КАРТОК: робимо їх компактними */
          .${styles.skinTypesCardsGrid} {
            grid-template-columns: 1fr 1fr !important; /* 2 в ряд */
            gap: 10px !important;
            padding: 0 15px !important;
          }

          .${styles.skinCard} {
            padding: 15px 10px !important; /* Менше простору всередині */
            min-height: 160px !important; /* Обмежена висота */
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            border-radius: 8px !important;
            background: #f9f9f9 !important;
          }

          .${styles.skinIcon} {
            font-size: 20px !important; /* Менша іконка */
            margin-bottom: 8px !important;
          }

          .${styles.skinCard} h3 {
            font-size: 14px !important; /* Компактний заголовок */
            margin-bottom: 5px !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
          }

          .${styles.skinCard} p {
            font-size: 11px !important; /* Маленький текст опису */
            line-height: 1.3 !important;
            margin: 0 !important;
            color: #666 !important;
          }

          .${styles.skinTypesPhotosRow} {
            display: none !important;
          }

          .cart-sidebar {
            width: 100% !important;
          }
        }
      `}</style>

      <Header toggleCart={toggleCart} />

      {/* Кошик */}
      {showCart && (
        <div
          className="cart-sidebar"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "400px",
            height: "100%",
            background: "#fff",
            boxShadow: "-2px 0 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Your Cart</h2>
            <button onClick={toggleCart} style={{ fontSize: "28px", cursor: "pointer", border: "none", background: "none" }}>&times;</button>
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>Add product</p>
          </div>
        </div>
      )}

      {/* About Us Section */}
      <section className={styles.aboutUsSection}>
        <div className={styles.aboutUsContainer}>
          <div className={styles.aboutUsImage}>
            <img src="/img/ecr.JPG" alt="About Us" />
          </div>
          <div className={styles.aboutUsContent}>
            <h2>EVERY DAY —<br />A NEW STEP<br />TOWARD PERFECT SKIN</h2>
            <p className={styles.aboutUsDescription}>
              Experience the sweetness of self-care with products crafted for
              healthy, radiant skin. Our cosmetics are carefully formulated with
              natural ingredients to nourish, protect, and rejuvenate your skin.
            </p>
            <button className={styles.contactButton} onClick={() => navigate("/contact")}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categoriesSection}>
        <div className={styles.categoriesContainer}>
          <div className={styles.categoriesText}>
            <p className={styles.categoriesLabel}>Categories</p>
            <h2 className={styles.categoriesTitle}>WE'VE COLLECTED THE BEST<br />FOR YOUR REQUESTS</h2>
            <button className={styles.showMoreButton} onClick={() => navigate("/skin-care")}>
              Show more
            </button>
          </div>
          <div className={styles.categoriesImages}>
            <div className={styles.categoryItem}><img src="/img/a1.JPG" alt="Cat 1" /><p>Care in every touch</p></div>
            <div className={styles.categoryItem}><img src="/img/h3.JPG" alt="Cat 2" /><p>Textures for every need</p></div>
            <div className={styles.categoryItem}><img src="/img/a2.JPG" alt="Cat 3" /><p>Softly spread</p></div>
          </div>
        </div>
      </section>

      {/* Mid Info Section */}
      <section style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "#fff" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "15px", textTransform: "uppercase" }}>ABOUT US</h2>
        <p style={{ fontSize: "16px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
          Experience the sweetness of self-care with products crafted for healthy, radiant skin. 
          Our cosmetics are carefully formulated with natural ingredients to nourish and protect.
        </p>
      </section>

      {/* Two-column section */}
      <section className={styles.leftSmallRightBigSection}>
        <div className={styles.leftSmallRightBigContainer}>
          <div className={styles.leftColumn}>
            <img src="/img/b1.JPG" alt="Small" className={styles.smallPhoto} />
            <p className={styles.leftText}>We have created a skincare space where every product is selected with care.</p>
            <p className={styles.leftMore} onClick={() => navigate("/new-page")} style={{ display: "flex", alignItems: "center", cursor: "pointer", fontWeight: "bold" }}>
              MORE DETAILS <FiArrowRight style={{ marginLeft: "5px" }} />
            </p>
          </div>
          <div className={styles.rightColumn}>
            <img src="/img/b2.JPG" alt="Big" className={styles.bigPhoto} />
          </div>
        </div>
      </section>

      {/* Skin Types Section */}
      <section className={styles.skinTypesBoxSection} style={{ paddingBottom: "40px" }}>
        <div className={styles.skinTypesImageWrapper}>
          <img src="/img/s.JPG" alt="Special Care" className={styles.skinTypesImage} />
        </div>
        <p className={styles.skinTypesDescription} style={{ padding: "0 20px" }}>
          Each skin type has its own characteristics and requires individual care.
        </p>

        <div className={styles.skinTypesCardsWrapper}>
          <div className={styles.skinTypesCardsGrid}>
            <div className={styles.skinCard} onClick={() => navigate("/normal-skin")}>
              <FaLeaf className={styles.skinIcon} />
              <h3>Normal skin</h3>
              <p>Balanced, healthy, and radiant.</p>
            </div>
            <div className={styles.skinCard} onClick={() => navigate("/dry-skin")}>
              <FaTint className={styles.skinIcon} />
              <h3>Dry skin</h3>
              <p>Needs hydration and nourishment.</p>
            </div>
            <div className={styles.skinCard} onClick={() => navigate("/oily-skin")}>
              <FaFire className={styles.skinIcon} />
              <h3>Oily skin</h3>
              <p>Prone to shine, requires control.</p>
            </div>
            <div className={styles.skinCard} onClick={() => navigate("/comby")}>
              <FaSyncAlt className={styles.skinIcon} />
              <h3>Combination</h3>
              <p>Mix of dry and oily areas.</p>
            </div>
            <div className={styles.skinCard} onClick={() => navigate("/sensitive-skin")}>
              <FaSpa className={styles.skinIcon} />
              <h3>Sensitive</h3>
              <p>Needs gentle, soothing care.</p>
            </div>
            <div className={styles.skinCard} onClick={() => navigate("/all-skin-types")}>
              <FaQuestion className={styles.skinIcon} />
              <h3>All types</h3>
              <p>Suitable for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: "40px", borderTop: "1px solid #000000ff", padding: "40px 20px", textAlign: "center" }}>
        <p style={{ fontWeight: "bold" }}>Honey & Amber Co.</p>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "10px", flexWrap: "wrap" }}>
          <Link to="/privacy-policy" style={{ textDecoration: "none", color: "#666", fontSize: "12px" }}>Privacy Policy</Link>
          <Link to="/terms-and-conditions" style={{ textDecoration: "none", color: "#666", fontSize: "12px" }}>Terms</Link>
          <Link to="/cookie-policy" style={{ textDecoration: "none", color: "#666", fontSize: "12px" }}>Cookies</Link>
        </div>
        <p style={{ marginTop: "20px", fontSize: "11px", color: "#999" }}>© 2026 Honey & Amber Co. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;