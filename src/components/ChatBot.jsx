import React, { useState, useEffect, useRef } from "react";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your Honey & Amber beauty consultant. Choose your skin type or ask about a brand:", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [lastSuggestedBrand, setLastSuggestedBrand] = useState(null); 
  const scrollRef = useRef(null);

  const products = [
    { id: 1, name: "Ordinary Tonic", price: 20, type: "Oily/Combination", usage: "Apply in the evening to cleansed skin using a cotton pad. Avoid the eye area.", info: "Exfoliating tonic with glycolic acid. Cleanses pores and evens out skin tone." },
    { id: 2, name: "Ordinary Serum", price: 40, type: "All skin types", usage: "Apply 2-3 drops in the morning and evening before your cream.", info: "Hydrating serum with hyaluronic acid. Plumps skin with moisture." },
    { id: 3, name: "Ordinary face cream", price: 20, type: "Dry/Normal", usage: "Apply after serum in the morning and evening.", info: "Nourishing face cream that protects the skin barrier." },
    { id: 4, name: "Dior Roller", price: 20, type: "All skin types", usage: "Use over oil or cream, moving along massage lines.", info: "Massage roller for lymphatic drainage and reducing puffiness." },
    { id: 5, name: "Dior Washing gel", price: 20, type: "Oily/Combination", usage: "Lather a small amount in palms, massage over face, and rinse.", info: "Gentle cleansing gel for deep purification." },
    { id: 7, name: "Centela Eye cream", price: 20, type: "Sensitive", usage: "Gently pat into the skin around the eyes.", info: "Soothing eye cream that reduces dark circles and swelling." },
  ];

  const suggestions = [
    { label: "🌿 Normal", value: "Normal skin" },
    { label: "🍂 Dry", value: "Dry skin" },
    { label: "✨ Oily", value: "Oily skin" },
    { label: "🌓 Combination", value: "Combination skin" },
    { label: "☁️ Sensitive", value: "Sensitive skin" },
    { label: "🌎 All types", value: "All skin types" },
    { label: "🛍️ Dior", value: "Dior" },
    { label: "🛍️ Ordinary", value: "Ordinary" },
  ];

  const skinTypeDescriptions = {
    "normal skin": "Normal skin: Balanced, healthy, and radiant. ✨",
    "dry skin": "Dry skin: Needs hydration and nourishment. 🍂",
    "oily skin": "Oily skin: Prone to shine, requires control. ✨",
    "combination skin": "Combination skin: Mix of dry and oily areas. 🌓",
    "sensitive skin": "Sensitive skin: Needs gentle, soothing care. ☁️",
    "all skin types": "All skin types: Suitable for everyone. 🌎",
  };

  const getBotResponse = (userInput) => {
    const lowInput = userInput.toLowerCase();

    // 1. Handling YES / NO responses
    if (lowInput === "yes" && lastSuggestedBrand) {
      const brandItems = products.filter(p => p.name.includes(lastSuggestedBrand));
      if (brandItems.length > 0) {
        let fullInfo = `Here are the ${lastSuggestedBrand} products:\n\n`;
        brandItems.forEach(p => {
          fullInfo += `🏷️ **${p.name}**\n💰 Price: $${p.price}\n👤 Best for: ${p.type}\n📝 Info: ${p.info}\n🧴 How to use: ${p.usage}\n\n`;
        });
        setLastSuggestedBrand(null);
        return fullInfo + "Would you like to explore anything else?";
      }
    }

    if (lowInput === "no") {
      setLastSuggestedBrand(null);
      return "No problem! If you have any more questions, I'm here. Feel free to choose a skin type for a recommendation.";
    }

    // 2. Brand search
    if (lowInput.includes("dior")) {
      setLastSuggestedBrand("Dior");
      return "We have a wonderful Dior collection. Would you like to know more about these products (price, description, usage)?";
    }
    if (lowInput.includes("ordinary")) {
      setLastSuggestedBrand("Ordinary");
      return "The Ordinary brand is highly popular. Would you like to see details regarding descriptions, prices, and application?";
    }

    // 3. Skin types
    if (skinTypeDescriptions[lowInput]) {
      const recommended = products.filter(p => p.type.toLowerCase().includes(lowInput.split(' ')[0])).map(p => p.name).join(", ");
      return `${skinTypeDescriptions[lowInput]}\n\nRecommended products: ${recommended || "Check our All Skin Types collection!"}`;
    }

    return "Please choose a category below or type a brand name.";
  };

  const handleAction = (val) => {
    if (!val.trim()) return;
    setMessages(prev => [...prev, { text: val, sender: "user" }]);
    
    setTimeout(() => {
      const botText = getBotResponse(val);
      setMessages(prev => [...prev, { text: botText, sender: "bot" }]);
    }, 500);
  };

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isOpen]);

  return (
    <div style={{ position: "fixed", bottom: "30px", right: "30px", zIndex: 2000 }}>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} style={buttonStyle}><FiMessageCircle /></button>
      )}

      {isOpen && (
        <div style={chatWindowStyle}>
          <div style={headerStyle}>
            <span style={{ fontWeight: "600", fontSize: "14px" }}>Honey & Amber Assistant</span>
            <FiX onClick={() => setIsOpen(false)} style={{ cursor: "pointer" }} />
          </div>

          <div style={messageContainerStyle} ref={scrollRef}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                ...messageStyle,
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                background: msg.sender === "user" ? "#000" : "#f8f9fa",
                color: msg.sender === "user" ? "#fff" : "#333",
                whiteSpace: "pre-line"
              }}>
                {msg.text}
              </div>
            ))}

            {messages[messages.length - 1]?.text.includes("Would you like to know") || messages[messages.length - 1]?.text.includes("Would you like to see") ? (
              <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                <button onClick={() => handleAction("Yes")} style={yesButtonStyle}>Yes</button>
                <button onClick={() => handleAction("No")} style={noButtonStyle}>No</button>
              </div>
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
                {suggestions.map((s, i) => (
                  <button key={i} onClick={() => handleAction(s.value)} style={suggestionButtonStyle}>{s.label}</button>
                ))}
              </div>
            )}
          </div>

          <div style={inputAreaStyle}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (handleAction(input), setInput(""))}
              placeholder="Type your message..."
              style={inputStyle}
            />
            <FiSend onClick={() => { handleAction(input); setInput(""); }} style={{ cursor: "pointer" }} />
          </div>
        </div>
      )}
    </div>
  );
};

// --- Styles (Same as before) ---
const buttonStyle = { width: "60px", height: "60px", borderRadius: "50%", background: "#000", color: "#fff", border: "none", cursor: "pointer", boxShadow: "0 4px 15px rgba(0,0,0,0.3)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px" };
const chatWindowStyle = { width: "350px", height: "500px", background: "#fff", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.15)", display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid #eee", fontFamily: "Arial, sans-serif" };
const headerStyle = { padding: "15px 20px", background: "#000", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" };
const messageContainerStyle = { flex: 1, padding: "15px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px" };
const messageStyle = { padding: "12px 16px", borderRadius: "15px", fontSize: "14px", maxWidth: "85%", lineHeight: "1.4" };
const suggestionButtonStyle = { padding: "6px 12px", borderRadius: "15px", border: "1px solid #e0e0e0", background: "#fff", cursor: "pointer", fontSize: "12px", color: "#555" };
const yesButtonStyle = { padding: "8px 25px", borderRadius: "10px", background: "#000", color: "#fff", border: "none", cursor: "pointer", fontWeight: "bold" };
const noButtonStyle = { padding: "8px 25px", borderRadius: "10px", background: "#eee", color: "#000", border: "none", cursor: "pointer" };
const inputAreaStyle = { padding: "15px", borderTop: "1px solid #eee", display: "flex", alignItems: "center", gap: "10px" };
const inputStyle = { flex: 1, border: "none", outline: "none", fontSize: "14px" };

export default ChatBot;