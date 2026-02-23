import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import styles from "../styles/ContactPage.module.css";
import { FiMapPin, FiPhone } from "react-icons/fi";

const ContactPage = () => {
  // Адреса Форуму
  const destinationAddress = "Forum Lviv, вулиця Під Дубом, 7Б, Львів";
  
  // Посилання на Google Maps
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destinationAddress)}`;

  return (
    <>
      {/* Адаптивні стилі спеціально для мобільних */}
      <style>{`
        @media (max-width: 768px) {
          .${styles.line} {
            width: 100% !important;
            margin-bottom: 40px !important;
          }
          
          .${styles.wrapper} {
            display: flex !important;
            flex-direction: column !important;
            gap: 40px !important;
            margin-bottom: 60px !important;
          }

          .${styles.left}, .${styles.right} {
            width: 100% !important;
          }

          .${styles.titleSection} h1 {
            font-size: 32px !important;
          }

          /* Поля вводу на iPhone мають бути 16px, щоб уникнути автозуму */
          .${styles.form} input, 
          .${styles.form} textarea {
            font-size: 16px !important;
          }

          .${styles.form} button {
            width: 100% !important;
          }
        }
      `}</style>

      <Header />

      {/* TITLE */}
      <section className={styles.titleSection}>
        <h1>Contact</h1>
      </section>

      <div className={styles.line} />

      {/* CONTENT */}
      <section className={styles.wrapper}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.small}>Contact us</p>
          <h2>Get in touch</h2>

          <p className={styles.text}>
            Feel free to contact us if you have any questions, ideas, or inquiries.
            We’re always open to new conversations and happy to help.
            <br /><br />
            Fill out the form below with your details, and we’ll get back to you 
            as soon as possible.
          </p>

          <div className={styles.info}>
            <p>• Mon–Sun: 10am – 09pm</p>

            <p className={styles.row}>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "8px", 
                  color: "inherit", 
                  textDecoration: "none" 
                }}
                onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                onMouseLeave={(e) => e.target.style.textDecoration = "none"}
              >
                <FiMapPin style={{ color: "#000", flexShrink: 0 }} />
                <span>{destinationAddress}</span>
              </a>
            </p>

            <p className={styles.row}>
              <FiPhone /> +380 322 433 310
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <form
            className={styles.form}
            action="https://formspree.io/f/xrebzbgr"
            method="POST"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your E-mail" required />
            <textarea name="message" placeholder="Your message" required />
            <input type="hidden" name="_replyto" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* MAP - Клікабельна зона (ЯК БУЛА) */}
      <section className={styles.map} style={{ cursor: "pointer", position: "relative" }}>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 10
          }}></div>
          
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.553932824647!2d24.020584476906236!3d49.85085443038891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add09b0b4671f%3A0xc3952f954388147d!2sForum%20Lviv!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen=""
            loading="lazy"
          />
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: "60px", borderTop: "1px solid #000", paddingTop: "20px", paddingBottom: "40px", textAlign: "center" }}>
        <p style={{ fontWeight: "bold" }}>Honey & Amber Co.</p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "10px", flexWrap: "wrap" }}>
          
          <Link 
            to="/privacy-policy" 
            style={{ textDecoration: "none", color: "#666" }}
            onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
            onMouseLeave={(e) => e.target.style.textDecoration = "none"}
          >
            Privacy Policy
          </Link>

          <Link 
            to="/terms-and-conditions" 
            style={{ textDecoration: "none", color: "#666" }}
            onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
            onMouseLeave={(e) => e.target.style.textDecoration = "none"}
          >
            Terms and Conditions
          </Link>

          <Link 
            to="/cookie-policy" 
            style={{ textDecoration: "none", color: "#666" }}
            onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
            onMouseLeave={(e) => e.target.style.textDecoration = "none"}
          >
            Cookie Policy
          </Link>
        </div>
        <p style={{ marginTop: "20px", fontSize: "12px", color: "#999" }}>
          © 2026 Honey & Amber Co. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default ContactPage;