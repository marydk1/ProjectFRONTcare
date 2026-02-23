import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useCart } from "../context/CartContext"; 

const staticProducts = [
  {
    id: 1,
    name: "Ordinary Tonic",
    description: "Refreshing facial tonic that revitalizes and soothes your skin.",
    price: 20,
    image: "/img/n4.jpg",
    details: {
      Ingredients: "Water, Witch Hazel, Glycerin, Aloe Vera extract, Glycolic Acid.",
      "How to Use": "Apply a few drops on a cotton pad and gently wipe over face morning and night.",
      Benefits: "Soothes irritation, refreshes skin, balances pH, and tightens pores."
    }
  },
  {
    id: 2,
    name: "Ordinary Serum",
    description: "Serum enriched with vitamins to improve skin elasticity and glow.",
    price: 40,
    image: "/img/n5.jpg",
    details: {
      Ingredients: "Vitamin C, Hyaluronic Acid, Niacinamide, Aqua, Glycerin.",
      "How to Use": "Apply 2-3 drops to cleansed face and neck, gently massage until absorbed.",
      Benefits: "Boosts elasticity, brightens complexion, and deep hydrates skin."
    }
  },
  {
    id: 3,
    name: "Ordinary Face Cream",
    description: "Rich face cream that moisturizes, nourishes, and protects your skin.",
    price: 20,
    image: "/img/n6.jpg",
    details: {
      Ingredients: "Shea Butter, Jojoba Oil, Vitamin E, Aloe Vera, Ceramides.",
      "How to Use": "Apply morning and evening to face and neck as the last step of your routine.",
      Benefits: "Deep hydration, nourishment, and strengthens skin barrier."
    }
  },
  {
    id: 4,
    name: "Dior Roller",
    description: "Cooling ice roller for soothing tired eyes and reducing puffiness.",
    price: 20,
    image: "/img/n1.jpg",
    details: {
      Ingredients: "Hypoallergenic Zinc Alloy, cooling gel core.",
      "How to Use": "Keep in fridge, roll under eyes or over face for 5-10 minutes in the morning.",
      Benefits: "Reduces puffiness, improves blood circulation, and refreshes skin."
    }
  },
  {
    id: 5,
    name: "Dior Washing Gel",
    description: "Gentle washing gel that cleanses and refreshes your skin daily.",
    price: 20,
    image: "/img/n2.jpg",
    details: {
      Ingredients: "Mild Surfactants, Rose Extract, Chamomile, Aqua.",
      "How to Use": "Massage a small amount onto damp skin, rinse thoroughly with warm water.",
      Benefits: "Cleanses without drying, removes impurities, and softens skin."
    }
  },
  {
    id: 6,
    name: "Dior Essence",
    description: "Hydrating essence that smooths the skin and prepares it for serums.",
    price: 20,
    image: "/img/n3.jpg",
    details: {
      Ingredients: "Fermented Yeast Extract, Hyaluronic Acid, Glycerin, Jasmine extract.",
      "How to Use": "Apply 2-3 drops on clean skin, gently pat with palms until absorbed.",
      Benefits: "Hydrates, smooths texture, and boosts absorption of other products."
    }
  },
  {
    id: 7,
    name: "Centella Eye Cream",
    description: "Eye cream that reduces dark circles, puffiness, and signs of fatigue.",
    price: 20,
    image: "/img/w1.jpg",
    details: {
      Ingredients: "Centella Asiatica Extract, Caffeine, Peptides, Panthenol.",
      "How to Use": "Apply a small amount around the eye area morning and evening using ring fingers.",
      Benefits: "Reduces puffiness, brightens dark circles, and hydrates delicate skin."
    }
  },
  {
    id: 8,
    name: "Centella Tone",
    description: "Soothing toner to restore skin radiance and even out complexion.",
    price: 20,
    image: "/img/w2.jpg",
    details: {
      Ingredients: "Centella Asiatica, Madecassoside, Green Tea, Niacinamide.",
      "How to Use": "Apply with a cotton pad or palms to cleansed face before serum.",
      Benefits: "Calms redness, evens skin tone, and provides initial hydration."
    }
  },
  {
    id: 9,
    name: "Centella Tone Bright",
    description: "Intensive brightening toner for a radiant and fresh look.",
    price: 20,
    image: "/img/w3.jpg",
    details: {
      Ingredients: "Brightening Peptides, Vitamin C, Centella Extract, Licorice Root.",
      "How to Use": "Use daily after cleansing. Pat gently into the skin for better absorption.",
      Benefits: "Fades dark spots, restores radiance, and improves skin clarity."
    }
  },
  {
    id: 10,
    name: "Dior Eye Rich Cream",
    description: "Ultra-moisturizing eye cream for mature or very dry skin.",
    price: 20,
    image: "/img/g2.jpg",
    details: {
      Ingredients: "Royal Jelly, Rose de Granville extract, Shea Butter, Vitamin E.",
      "How to Use": "Gently dab a small amount under eyes and on eyelids morning and night.",
      Benefits: "Intense hydration, anti-aging effect, and smooths fine lines."
    }
  },
  {
    id: 11,
    name: "Dior Prestige Balm",
    description: "Luxurious repair balm for restoring skin barrier and texture.",
    price: 20,
    image: "/img/le.jpg",
    details: {
      Ingredients: "Rose Micro-Oils, Ceramides, Beeswax, Rose Nectar.",
      "How to Use": "Warm a small amount between fingers and apply to dry areas of the face.",
      Benefits: "Restores skin barrier, heals dry patches, and provides ultimate comfort."
    }
  },
  {
    id: 12,
    name: "Dior Le Nectar",
    description: "Daily hydrating serum that keeps your skin fresh and supple.",
    price: 20,
    image: "/img/g4.jpg",
    details: {
      Ingredients: "Rose Nectar, Hyaluronic Acid, Seaweed Extract, Glycerin.",
      "How to Use": "Apply 2-3 drops on face and neck before your moisturizer.",
      Benefits: "Keeps skin hydrated, provides a youthful glow, and refreshes."
    }
  }
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addItemToCart } = useCart(); 
  
  const [product, setProduct] = useState(null);
  const [selectedVolume, setSelectedVolume] = useState("250ml");
  const [expandedSections, setExpandedSections] = useState({});

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("ownerProducts")) || [];
    
    const formattedSaved = savedProducts.map(p => ({
      ...p,
      name: p.description, 
      details: p.details || {
        Ingredients: "Check packaging for full ingredient list.",
        "How to Use": "Apply as part of your daily skincare routine.",
        Benefits: "Designed for professional results and skin health."
      }
    }));

    const allAvailableProducts = [...staticProducts, ...formattedSaved];
    const foundProduct = allAvailableProducts.find(p => String(p.id) === String(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <p style={{ textAlign: "center", marginTop: "50px" }}>Product not found</p>;

  const currentPrice = selectedVolume === "500ml" ? product.price + 5 : product.price;

  const toggleSection = (index) => {
    setExpandedSections(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleAddToCart = () => {
    addItemToCart({
      id: `${product.id}-${selectedVolume}`, 
      description: product.name, // Використовуємо name як головний опис у кошику
      price: currentPrice, 
      image: product.image,
      volume: selectedVolume
    });
  };

  const infoSections = Object.keys(product.details).map(key => ({
    title: key,
    content: product.details[key],
  }));

  return (
    <div style={{ backgroundColor: "#fff", color: "#000", minHeight: "100vh" }}>
      <Header />

      <hr style={{ border: "none", borderTop: "1px solid #000", margin: 0 }} />

      <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", alignItems: "flex-start" }}>
          
          <img
            src={product.image}
            alt={product.name}
            style={{ 
              width: "45%", 
              borderRadius: "0px", 
              objectFit: "cover", 
              minWidth: "300px", 
              border: "none"
            }}
          />

          <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingTop: "20px" }}>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
              <h1 style={{ fontWeight: "700", fontSize: "36px", margin: 0, textTransform: "uppercase" }}>
                {product.name}
              </h1>
              <span style={{ fontSize: "20px", fontWeight: "600" }}>{currentPrice} UAH</span>
            </div>

            <p style={{ fontSize: "14px", marginBottom: "20px", color: "#888", letterSpacing: "1px" }}>
              {selectedVolume}
            </p>
            <p style={{ fontSize: "16px", marginBottom: "30px", lineHeight: "1.6" }}>
              {product.description}
            </p>

            <div style={{ display: "flex", gap: "25px", alignItems: "center", marginBottom: "40px", marginTop: "10px" }}>
              {["250ml", "500ml"].map(vol => (
                <div
                  key={vol}
                  onClick={() => setSelectedVolume(vol)}
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    border: "1px solid #000",
                    backgroundColor: selectedVolume === vol ? "#000" : "#fff",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <span style={{ 
                    position: "absolute", 
                    top: "25px", 
                    left: "50%", 
                    transform: "translateX(-50%)", 
                    fontSize: "10px", 
                    whiteSpace: "nowrap",
                    fontWeight: selectedVolume === vol ? "bold" : "normal",
                    letterSpacing: "1px"
                  }}>
                    {vol}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleAddToCart}
              style={{
                width: "100%", 
                maxWidth: "220px",
                padding: "18px 24px",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                marginBottom: "30px",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase"
              }}
            >
              ADD TO CART
            </button>

            {infoSections.map((section, index) => (
              <div key={index} style={{ borderTop: "1px solid #000", padding: "20px 0" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between", cursor: "pointer", alignItems: "center" }}
                  onClick={() => toggleSection(index)}
                >
                  <h2 style={{ fontWeight: "600", fontSize: "14px", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
                    {section.title}
                  </h2>
                  <span style={{ fontSize: "18px" }}>{expandedSections[index] ? "−" : "+"}</span>
                </div>
                {expandedSections[index] && (
                  <p style={{ fontSize: "14px", marginTop: "15px", color: "#333", lineHeight: "1.6", letterSpacing: "0.5px" }}>
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer style={{ marginTop: "60px", borderTop: "1px solid #000", padding: "40px 0", textAlign: "center" }}>
          <p style={{ margin: 0, fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>
            Honey & Amber Co.
          </p>
      </footer>
    </div>
  );
};

export default ProductDetailPage;