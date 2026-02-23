import React from "react";
import Header from "../components/Header";

const SensitiveSkinPage = () => {
  return (
    <div style={{ backgroundColor: "#fff", color: "#000", fontFamily: "inherit" }}>
      <Header />

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Hero Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "56px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", margin: "0 0 20px 0" }}>
          Sensitive Skin
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6", color: "#333" }}>
          Your skin needs peace and quiet. Our approach is based on the "less is more" principle, focusing on strengthening the natural barrier and providing instant soothing.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Indicators Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px" }}>Skin Signals</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
          {[
            { title: "Redness", text: "Tendency to redden from friction, water, or emotional stress." },
            { title: "Reactivity", text: "Instant reaction to new cosmetic products or changes in climate." },
            { title: "Discomfort", text: "Frequent sensations of burning, tingling, or itching." },
            { title: "Fragility", text: "A thin protective barrier that is easily compromised." }
          ].map((item, idx) => (
            <div key={idx} style={{ borderLeft: "1px solid #000", paddingLeft: "20px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", textTransform: "uppercase", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.5", margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Soothing Strategy Section (Black Block) */}
      <section style={{ backgroundColor: "#000", color: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Safety Protocol</h2>
          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{ color: "#fff", borderBottom: "1px solid #fff", paddingBottom: "10px", textTransform: "uppercase" }}>Safe Haven</h3>
              <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
                <li>• Panthenol and Centella Asiatica (Cica).</li>
                <li>• Hypoallergenic fragrance-free formulas.</li>
                <li>• Physical SPF filters (Zinc Oxide).</li>
                <li>• Mandatory patch-testing before full use.</li>
              </ul>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{ color: "#fff", borderBottom: "1px solid #fff", paddingBottom: "10px", textTransform: "uppercase" }}>Red Flags</h3>
              <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
                <li>• Essential oils and strong synthetic fragrances.</li>
                <li>• High concentrations of pure acids.</li>
                <li>• Hot water while washing the face.</li>
                <li>• Alcohol-based toners and aggressive scrubs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Routine Guide */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Ultra-Gentle Routine</h2>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", textAlign: "center", flexWrap: "wrap" }}>
          {[
            { step: "01", name: "Mild Cleanse", desc: "Sulfate-free emulsion or cleansing milk" },
            { step: "02", name: "Calm", desc: "Toner with Centella or probiotics" },
            { step: "03", name: "Recover", desc: "Soothing Panthenol-based serum" },
            { step: "04", name: "Barrier", desc: "Lamellar structured restorative cream" }
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
        <p style={{ fontSize: "12px", marginTop: "10px", color: "#888" }}>Kindness for your skin's peace.</p>
      </footer>
    </div>
  );
};

export default SensitiveSkinPage;