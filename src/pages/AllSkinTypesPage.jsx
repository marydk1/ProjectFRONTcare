import React from "react";
import Header from "../components/Header";

const AllSkinTypesPage = () => {
  return (
    <div style={{ backgroundColor: "#fff", color: "#000", fontFamily: "inherit" }}>
      <Header />

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Hero Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "56px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", margin: "0 0 20px 0" }}>
          Universal Care
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6", color: "#333" }}>
          We believe that skin health begins with fundamental steps. These tips and products are suitable for everyone, helping to maintain natural balance and radiance.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Core Principles (The Essentials) */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px" }}>The Essentials</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
          {[
            { title: "Hydration", text: "Water is the foundation. Well-hydrated skin protects itself better against external factors." },
            { title: "Protection", text: "SPF is a must for everyone 365 days a year to prevent photoaging." },
            { title: "Cleanliness", text: "Quality evening cleansing removes impurities and prepares the skin for sleep." },
            { title: "Consistency", text: "Regularity is more important than expensive products. Your skin loves stability." }
          ].map((item, idx) => (
            <div key={idx} style={{ borderLeft: "1px solid #000", paddingLeft: "20px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", textTransform: "uppercase", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.5", margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Universal Ingredients (Black Block) */}
      <section style={{ backgroundColor: "#000", color: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Power Ingredients for Everyone</h2>
          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{ color: "#fff", borderBottom: "1px solid #fff", paddingBottom: "10px", textTransform: "uppercase" }}>Hyaluronic Acid</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.8" }}>Attracts moisture into skin cells, making it firm and fresh. Perfect for both oily and dry skin types.</p>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{ color: "#fff", borderBottom: "1px solid #fff", paddingBottom: "10px", textTransform: "uppercase" }}>Antioxidants</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.8" }}>Vitamins C and E protect against free radicals and urban stress, providing the skin with a healthy tone.</p>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{ color: "#fff", borderBottom: "1px solid #fff", paddingBottom: "10px", textTransform: "uppercase" }}>Ceramides</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.8" }}>The "bricks" for your barrier. They help retain moisture and protect against environmental irritants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Routine */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Universal Routine</h2>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", textAlign: "center", flexWrap: "wrap" }}>
          {[
            { step: "Morning", name: "Protect", desc: "Water-based cleanse + SPF protection" },
            { step: "Evening", name: "Cleanse", desc: "Double cleansing from makeup and pollutants" },
            { step: "Night", name: "Renew", desc: "Hydrating cream for overnight recovery" },
            { step: "Weekly", name: "Treat", desc: "Gentle exfoliation or nourishing mask" }
          ].map((item, idx) => (
            <div key={idx} style={{ flex: 1, minWidth: "200px" }}>
              <div style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px", textTransform: "uppercase" }}>{item.step}</div>
              <h4 style={{ textTransform: "uppercase", margin: "0 0 10px 0", letterSpacing: "1px" }}>{item.name}</h4>
              <p style={{ fontSize: "13px", color: "#666" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      <footer style={{ padding: "40px 20px", textAlign: "center" }}>
        <p style={{ fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>Honey & Amber Co.</p>
        <p style={{ fontSize: "12px", marginTop: "10px", color: "#888" }}>Skincare for everyone. No exceptions.</p>
      </footer>
    </div>
  );
};

export default AllSkinTypesPage;