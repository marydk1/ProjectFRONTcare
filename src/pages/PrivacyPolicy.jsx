import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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

  const listStyle = {
    paddingLeft: "20px",
    marginBottom: "20px",
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
        <h1 style={titleStyle}>Privacy Policy</h1>
        
        <p style={{ textAlign: "center", fontStyle: "italic", marginBottom: "40px" }}>
          Last Updated: January 2026
        </p>

        <section>
          <h2 style={sectionTitleStyle}>1. Introduction</h2>
          <p style={textStyle}>
            Welcome to Honey & Amber Co. We value your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p> section
        </section>

        <section>
          <h2 style={sectionTitleStyle}>2. Data We Collect</h2>
          <p style={textStyle}>We may collect the following information:</p>
          <ul style={listStyle}>
            <li>Identity Data: First name, last name.</li>
            <li>Contact Data: Email address, phone number (+380 format).</li>
            <li>Technical Data: IP address, location, browser type.</li>
            <li>Usage Data: Information about how you use our website.</li>
          </ul>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>3. How We Use Your Data</h2>
          <p style={textStyle}>
            Your data is used to provide and improve our services, including:
          </p>
          <ul style={listStyle}>
            <li>Registering your account and processing your login.</li>
            <li>Sending updates regarding your orders or account status.</li>
            <li>Improving our website design and user experience.</li>
          </ul>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>4. Data Security</h2>
          <p style={textStyle}>
            We implement industry-standard security measures to prevent your personal data from being accidentally lost, 
            used, or accessed in an unauthorized way.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>5. Cookies</h2>
          <p style={textStyle}>
            We use cookies to enhance your experience. You can set your browser to refuse all or some cookies, 
            but this may affect the functionality of certain parts of the site.
          </p>
        </section>

        <button style={backButtonStyle} onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px 0",
          borderTop: "1px solid #000",
          marginTop: "60px",
        }}
      >
        <p style={{ margin: 0, fontWeight: "700" }}>Honey & Amber Co.</p>
      </footer>
    </>
  );
};

export default PrivacyPolicy;