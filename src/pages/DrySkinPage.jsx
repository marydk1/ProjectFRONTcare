import React from "react";
import Header from "../components/Header";

const DrySkinPage = () => {
  return (
    <div style={{ backgroundColor: "#fff", color: "#000", fontFamily: "inherit" }}>
      <Header />

      {/* Main line under header */}
      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Hero Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "56px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", margin: "0 0 20px 0" }}>
          Dry Skin
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6", color: "#333" }}>
          Your skin requires special attention and deep nourishment. 
          We have developed a guide to help you eliminate the feeling of tightness and restore your skin's natural softness.
        </p>
      </section>

      {/* Divider Line */}
      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Key Indicators Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px" }}>Key Indicators</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
          {[
            { title: "Tightness", text: "A persistent feeling of tightness, especially after cleansing." },
            { title: "Texture", text: "Tendency toward flaking and a rough feel to the touch." },
            { title: "Pores", text: "Almost invisible pores, with a matte tone lacking natural shine." },
            { title: "Sensitivity", text: "Quick reaction to cold, wind, and dry air." }
          ].map((item, idx) => (
            <div key={idx} style={{ borderLeft: "1px solid #000", paddingLeft: "20px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", textTransform: "uppercase", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.5", margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider Line */}
      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Recovery Rules Section (Black block for contrast) */}
      <section style={{ backgroundColor: "#000", color: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Recovery Rules</h2>
          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{ color: "#fff", borderBottom: "1px solid #fff", paddingBottom: "10px", textTransform: "uppercase" }}>Must Have</h3>
              <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
                <li>• Use ceramides to restore the skin barrier.</li>
                <li>• Apply moisturizer to damp skin to "lock in" moisture.</li>
                <li>• Add hyaluronic acid of different molecular weights.</li>
                <li>• Choose oil-based textures for your evening routine.</li>
              </ul>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{ color: "#fff", borderBottom: "1px solid #fff", paddingBottom: "10px", textTransform: "uppercase" }}>Avoid</h3>
              <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
                <li>• Avoid harsh sulfate-based cleansers.</li>
                <li>• Don't overuse clay-based masks.</li>
                <li>• Minimize the use of scrubs with large particles.</li>
                <li>• Never ignore protective cream in freezing weather.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Routine Guide for Dry Skin */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Rich Hydration Routine</h2>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", textAlign: "center", flexWrap: "wrap" }}>
          {[
            { step: "01", name: "Oil Cleanse", desc: "Hydrophilic oil or cleansing milk" },
            { step: "02", name: "Moist Essence", desc: "Hydrating essence or toner" },
            { step: "03", name: "Nourish", desc: "Nourishing serum with oils" },
            { step: "04", name: "Seal", desc: "Rich restorative cream" }
          ].map((item, idx) => (
            <div key={idx} style={{ flex: 1, minWidth: "200px" }}>
              <div style={{ fontSize: "40px", fontWeight: "200", marginBottom: "10px" }}>{item.step}</div>
              <h4 style={{ textTransform: "uppercase", margin: "0 0 10px 0" }}>{item.name}</h4>
              <p style={{ fontSize: "13px", color: "#666" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Divider Line */}
      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      <footer style={{ padding: "40px 20px", textAlign: "center" }}>
        <p style={{ fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>Honey & Amber Co.</p>
        <p style={{ fontSize: "12px", marginTop: "10px", color: "#888" }}>Deep nourishment for your inner glow.</p>
      </footer>
    </div>
  );
};

export default DrySkinPage;