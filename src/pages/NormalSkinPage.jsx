import React from "react";
import Header from "../components/Header";

const NormalSkinPage = () => {
  return (
    <div style={{ backgroundColor: "#fff", color: "#000", fontFamily: "inherit" }}>
      <Header />

      {/* Main line under header */}
      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Hero Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "56px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", margin: "0 0 20px 0" }}>
          Normal Skin
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6", color: "#333" }}>
          Your skin is a perfect balance between hydration and sebum regulation. 
          We will help you preserve this natural gift with proper minimalistic care.
        </p>
      </section>

      {/* Divider Line */}
      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      {/* Characteristics Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px" }}>Characteristics</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
          {[
            { title: "Texture", text: "Smooth surface with invisible pores." },
            { title: "Elasticity", text: "High level of firmness and a natural healthy glow." },
            { title: "Sensation", text: "No feeling of tightness or oily shine throughout the day." },
            { title: "Resistance", text: "A strong protective barrier that rarely reacts to irritants." }
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

      {/* Advice Section (Black block for contrast) */}
      <section style={{ backgroundColor: "#000", color: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Essential Care Tips</h2>
          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{ color: "#fff", borderBottom: "1px solid #fff", paddingBottom: "10px", textTransform: "uppercase" }}>Do's</h3>
              <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
                <li>• Apply SPF daily, even on cloudy days.</li>
                <li>• Maintain pH balance with gentle toners.</li>
                <li>• Switch to richer formulas during the winter season.</li>
                <li>• Add antioxidants (Vitamin C) for extra radiance.</li>
              </ul>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={{ color: "#fff", borderBottom: "1px solid #fff", paddingBottom: "10px", textTransform: "uppercase" }}>Don'ts</h3>
              <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
                <li>• Avoid harsh alcohol-based products.</li>
                <li>• Don't overload the skin with excessively heavy oils.</li>
                <li>• Never skip evening cleansing, even without makeup.</li>
                <li>• Avoid using hot water for washing your face.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Routine Guide */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>The Routine</h2>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", textAlign: "center", flexWrap: "wrap" }}>
          {[
            { step: "01", name: "Cleanse", desc: "Gentle gel or cleansing foam" },
            { step: "02", name: "Tone", desc: "Hydrating and balancing toner" },
            { step: "03", name: "Treat", desc: "Serum as needed" },
            { step: "04", name: "Moisturize", desc: "Lightweight moisturizer" }
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
        <p style={{ fontSize: "12px", marginTop: "10px", color: "#888" }}>
          Your skin is our priority. Treat it with respect.
        </p>
      </footer>
    </div>
  );
};

export default NormalSkinPage;