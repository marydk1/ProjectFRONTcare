import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaMapMarkerAlt } from "react-icons/fa";
import styles from "../styles/Home.module.css";

const ContactService = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.contactService}>
      {/* Кнопка для відкриття контактів */}
      <button className={styles.toggleButton} onClick={() => setOpen(!open)}>
        Contact Service {open ? "▲" : "▼"}
      </button>

      {/* Контент, що зʼявляється при відкритті */}
      {open && (
        <div className={styles.contactContent}>
          <p className={styles.contactText}>Contacts</p>
          <div className={styles.spacer} /> {/* відступ */}
          <p className={styles.contactText}>Shipping and Returns</p>
          <div className={styles.spacer} /> {/* відступ */}
        </div>
      )}

      {/* Постійний контент після кнопки */}
      <div className={styles.contactContent}>
        <p className={styles.contactText}>
          <FaMapMarkerAlt style={{ marginRight: "8px" }} />
          Find a store
        </p>
        <div className={styles.spacer} /> {/* відступ */}
        <p className={styles.contactText}>
          Contact us:{" "}
          <FaInstagram style={{ margin: "0 8px" }} />
          <FaTiktok style={{ margin: "0 8px" }} />
          <FaFacebookF style={{ margin: "0 8px" }} />
        </p>
      </div>
    </section>
  );
};

export default ContactService;
