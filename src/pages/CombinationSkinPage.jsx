import React from "react";
import Header from "../components/Header";

const CombinationSkinPage = () => {
  return (
    <div style={{ backgroundColor: "#fff", color: "#000", fontFamily: "inherit" }}>
      <Header />

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Hero Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "56px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", margin: "0 0 20px 0" }}>
          Combination Skin
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6", color: "#333" }}>
          The art of balance. Combination skin requires a personalized approach for each zone of the face: mattifying where it shines and hydrating where it's dry.
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Characteristics Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px" }}>The Dual Nature</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
          {[
            { title: "T-Zone", text: "The forehead, nose, and chin are prone to oiliness and enlarged pores." },
            { title: "U-Zone", text: "The cheeks and jawline often feel dry or normal." },
            { title: "Seasonality", text: "Skin tends to become drier in winter and oilier during summer months." },
            { title: "Complexity", text: "Requires the simultaneous use of different product textures." }
          ].map((item, idx) => (
            <div key={idx} style={{ borderLeft: "1px solid #000", paddingLeft: "20px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", textTransform: "uppercase", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.5", margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Strategy Section (Black Block) */}
      <section style={{ backgroundColor: "#000", color: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Zonal Strategy</h2>
          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{ color: "#fff", borderBottom: "1px solid #fff", paddingBottom: "10px", textTransform: "uppercase" }}>T-Zone Care</h3>
              <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
                <li>• Lightweight water-based serums.</li>
                <li>• Localized application of purifying clay masks.</li>
                <li>• Gentle exfoliation with BHA acids.</li>
                <li>• Use of blotting papers throughout the day.</li>
              </ul>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{ color: "#fff", borderBottom: "1px solid #fff", paddingBottom: "10px", textTransform: "uppercase" }}>U-Zone Care</h3>
              <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
                <li>• Rich, nourishing creams for the cheeks.</li>
                <li>• Alcohol-free hydrating toners.</li>
                <li>• Barrier protection with lipids and ceramides.</li>
                <li>• Avoiding aggressive foaming cleansers.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Routine Guide */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Balanced Routine</h2>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", textAlign: "center", flexWrap: "wrap" }}>
          {[
            { step: "01", name: "Gentle Wash", desc: "Neutral pH foaming cleanser" },
            { step: "02", name: "Multi-Tone", desc: "Mattifying toner on T-Zone only" },
            { step: "03", name: "Hydrate", desc: "Hyaluronic acid serum for all areas" },
            { step: "04", name: "Layering", desc: "Gel-cream everywhere + rich cream on cheeks" }
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
        <p style={{ fontSize: "12px", marginTop: "10px", color: "#888" }}>The perfect harmony for your skin.</p>
      </footer>
    </div>
  );
};

export default CombinationSkinPage;