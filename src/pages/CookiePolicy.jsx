import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const CookiePolicy = () => {
  const navigate = useNavigate();

  const containerStyle = {
    maxWidth: "800px",
    margin: "60px auto",
    padding: "0 20px",
    fontFamily: "'Inter', sans-serif",
    lineHeight: "1.6",
    color: "#333",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "700",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: "40px",
    letterSpacing: "2px",
  };

  const sectionTitleStyle = {
    fontSize: "18px",
    fontWeight: "700",
    textTransform: "uppercase",
    marginTop: "30px",
    marginBottom: "15px",
    borderBottom: "1px solid #000",
    paddingBottom: "5px",
    display: "inline-block",
  };

  const textStyle = {
    fontSize: "16px",
    marginBottom: "15px",
    textAlign: "justify",
  };

  const backButtonStyle = {
    padding: "12px 25px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
    textTransform: "uppercase",
    marginTop: "40px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <h1 style={titleStyle}>Cookie Policy</h1>
        
        <p style={{ textAlign: "center", fontStyle: "italic", marginBottom: "40px" }}>
          Last Updated: January 2026
        </p>

        <section>
          <h2 style={sectionTitleStyle}>1. What Are Cookies?</h2>
          <p style={textStyle}>
            Cookies are small text files that are stored on your device when you visit our website. They help us make your experience more efficient and provide us with information about how you use our site.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>2. How We Use Cookies</h2>
          <p style={textStyle}>Honey & Amber Co. uses cookies for the following purposes:</p>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li><strong>Essential Cookies:</strong> Necessary for the website to function (e.g., login, shopping cart).</li>
            <li><strong>Preference Cookies:</strong> To remember your settings, like country code or language.</li>
            <li><strong>Analytics Cookies:</strong> To understand how visitors interact with the site.</li>
          </ul>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>3. Your Choices</h2>
          <p style={textStyle}>
            Most web browsers allow you to control cookies through their settings. Please note that disabling essential cookies may prevent you from using certain features of our website, such as adding products to the cart.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>4. Local Storage</h2>
          <p style={textStyle}>
            In addition to cookies, we use <strong>Local Storage</strong> to save your cart items, wishlist, and form data (like your email or location) so that you don't have to re-enter them every time you visit.
          </p>
        </section>

        <button style={backButtonStyle} onClick={() => navigate(-1)}>
          Understood
        </button>
      </div>

      <footer style={{ textAlign: "center", padding: "40px 0", borderTop: "1px solid #000", marginTop: "60px" }}>
        <p style={{ margin: 0, fontWeight: "700" }}>Honey & Amber Co.</p>
      </footer>
    </>
  );
};

export default CookiePolicy;