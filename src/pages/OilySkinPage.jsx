import React from "react";
import Header from "../components/Header";

const OilySkinPage = () => {
  return (
    <div style={{ backgroundColor: "#fff", color: "#000", fontFamily: "inherit" }}>
      <Header />

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Hero Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "56px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", margin: "0 0 20px 0" }}>
          Oily Skin
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6", color: "#333" }}>
          Oily skin doesn't need aggressive stripping; it needs a smart balance. 
          We will teach you how to control shine without damaging your protective barrier.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Analysis Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px" }}>Analysis</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
          {[
            { title: "Shine", text: "Appearance of an oily sheen just a few hours after cleansing." },
            { title: "Pores", text: "Enlarged pores and a tendency for comedones to form." },
            { title: "Thickness", text: "Skin is typically thicker with less visible fine lines and wrinkles." },
            { title: "Breakouts", text: "Prone to occasional inflammation and acne flares." }
          ].map((item, idx) => (
            <div key={idx} style={{ borderLeft: "1px solid #000", paddingLeft: "20px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", textTransform: "uppercase", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.5", margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Balance Strategy Section (Black Block) */}
      <section style={{ backgroundColor: "#000", color: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Balance Strategy</h2>
          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{ color: "#fff", borderBottom: "1px solid #fff", paddingBottom: "10px", textTransform: "uppercase" }}>Focus On</h3>
              <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
                <li>• Double Cleansing in the evening routine.</li>
                <li>• Salicylic Acid (BHA) for deep pore cleansing.</li>
                <li>• Niacinamide to regulate sebum production.</li>
                <li>• Oil-free hydrating gels and fluids.</li>
              </ul>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{ color: "#fff", borderBottom: "1px solid #fff", paddingBottom: "10px", textTransform: "uppercase" }}>Common Mistakes</h3>
              <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
                <li>• Over-drying with harsh alcohol-based products.</li>
                <li>• Skipping moisturizer (this triggers more sebum production).</li>
                <li>• Using comedogenic oils (coconut, linseed).</li>
                <li>• Frequent use of abrasive physical scrubs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Routine Guide */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Clarifying Routine</h2>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", textAlign: "center", flexWrap: "wrap" }}>
          {[
            { step: "01", name: "Deep Clean", desc: "Acid-based gel or enzyme powder" },
            { step: "02", name: "Exfoliate", desc: "BHA toner 2-3 times per week" },
            { step: "03", name: "Regulate", desc: "Niacinamide or Zinc serum" },
            { step: "04", name: "Mattify", desc: "Lightweight cream-gel or emulsion" }
          ].map((item, idx) => (
            <div key={idx} style={{ flex: 1, minWidth: "200px" }}>
              <div style={{ fontSize: "40px", fontWeight: "200", marginBottom: "10px" }}>{item.step}</div>
              <h4 style={{ textTransform: "uppercase", margin: "0 0 10px 0" }}>{item.name}</h4>
              <p style={{ fontSize: "13px", color: "#666" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      <footer style={{ padding: "40px 20px", textAlign: "center" }}>
        <p style={{ fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>Honey & Amber Co.</p>
        <p style={{ fontSize: "12px", marginTop: "10px", color: "#888" }}>Clear skin. Confident you.</p>
      </footer>
    </div>
  );
};

export default OilySkinPage;