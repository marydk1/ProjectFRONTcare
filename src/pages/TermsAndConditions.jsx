import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
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
    transition: "opacity 0.2s",
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <h1 style={titleStyle}>Terms and Conditions</h1>
        
        <p style={{ textAlign: "center", fontStyle: "italic", marginBottom: "40px" }}>
          Last Updated: January 2026
        </p>

        <section>
          <h2 style={sectionTitleStyle}>1. Acceptance of Terms</h2>
          <p style={textStyle}>
            By accessing and using the Honey & Amber Co. website, you accept and agree to be bound by the terms and provision of this agreement. 
            If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>2. Intellectual Property</h2>
          <p style={textStyle}>
            All content on this site, including images, descriptions, logos, and design, is the property of Honey & Amber Co. 
            Reproduction, distribution, or unauthorized use of any material is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>3. Product Information & Pricing</h2>
          <p style={textStyle}>
            We strive to ensure all information and prices are accurate. However, errors may occur. 
            Honey & Amber Co. reserves the right to correct any errors and to change or update information at any time without prior notice.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>4. User Accounts</h2>
          <p style={textStyle}>
            When you create an account, you are responsible for maintaining the confidentiality of your password and account details. 
            You agree to notify us immediately of any unauthorized use of your account.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>5. Limitation of Liability</h2>
          <p style={textStyle}>
            Honey & Amber Co. shall not be liable for any direct, indirect, or incidental damages resulting from the use or inability to use 
            our products or website services.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>6. Governing Law</h2>
          <p style={textStyle}>
            These terms are governed by and construed in accordance with the laws of Ukraine. 
            Any disputes will be resolved in the appropriate courts of the jurisdiction.
          </p>
        </section>

        <button 
          style={backButtonStyle} 
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => e.target.style.opacity = "0.8"}
          onMouseLeave={(e) => e.target.style.opacity = "1"}
        >
          Accept & Return
        </button>
      </div>

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

export default TermsAndConditions;