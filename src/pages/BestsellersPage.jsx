import React, { useState, useEffect } from "react"; 
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  { id: 10, name: "Dior Eye Rich cream", price: 20, image: "/img/g2.JPG" },
  { id: 12, name: "Dior Le Nectar",     price: 20, image: "/img/g4.JPG" },
  { id: 11, name: "Dior Prestige Balme", price: 20, image: "/img/le.JPG" },
];

const BestsellersPage = () => {
  const { addItemToCart } = useCart();
  const [favorites, setFavorites] = useState({}); 

  // 1. Завантажуємо стан сердечок при завантаженні сторінки
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const favoritesMap = {};
    savedWishlist.forEach(item => {
      favoritesMap[item.id] = true;
    });
    setFavorites(favoritesMap);
  }, []);

  // 2. Функція перемикання Wishlist
  const toggleFavorite = (product) => {
    const currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isExist = currentWishlist.find(item => item.id === product.id);
    
    let updatedWishlist;
    if (isExist) {
      updatedWishlist = currentWishlist.filter(item => item.id !== product.id);
    } else {
      updatedWishlist = [...currentWishlist, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }];
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    
    setFavorites((prev) => ({
      ...prev,
      [product.id]: !prev[product.id],
    }));
  };

  // ВИПРАВЛЕНО: Уніфіковано з іншими сторінками (ID, description, volume)
  const handleAddToCart = (product) => {
    addItemToCart({ 
      id: `${product.id}-250ml`, 
      description: product.name, 
      price: product.price,
      image: product.image,
      volume: "250ml",
      quantity: 1 
    });
  };

  return (
    <>
      <Header />

      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "40px", fontWeight: "700" }}>Bestsellers</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto", fontWeight: "300", lineHeight: "1.6" }}>
          Our bestsellers are the most popular products
        </p>
      </section>

      <section style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "40px",
        padding: "0 20px"
      }}>
        {products.map((p) => (
          <div key={p.id} style={{ textAlign: "center" }}>
            
            <div style={{ position: "relative" }}>
              <div style={{ 
                position: "absolute", 
                top: "12px", 
                right: "12px", 
                zIndex: 3 
              }}>
                <button 
                  onClick={() => toggleFavorite(p)}
                  style={{
                    background: "white",
                    border: "1px solid #000",
                    borderRadius: "50%",
                    width: "34px",
                    height: "34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill={favorites[p.id] ? "#000" : "none"} 
                    stroke="#000" 
                    strokeWidth="1.5"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>

              <Link to={`/product/${p.id}`}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ 
                    width: "100%", 
                    aspectRatio: "1 / 1", 
                    objectFit: "cover", 
                    borderRadius: "12px", 
                    cursor: "pointer",
                    display: "block"
                  }}
                />
              </Link>
            </div>

            <div style={{ borderTop: "1px solid #000", marginTop: "12px", paddingTop: "10px" }}>
              <Link to={`/product/${p.id}`} style={{ textDecoration: "none", color: "#000" }}>
                <p style={{ fontWeight: "700", margin: "5px 0" }}>{p.name}</p>
              </Link>
              <p style={{ fontWeight: "600", margin: "5px 0" }}>₴{p.price},00</p>
              
              <button 
                onClick={() => handleAddToCart(p)} 
                style={{
                  width: "30%", 
                  padding: "12px 0",
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "13px"
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </section>

      <footer style={{ marginTop: "100px", borderTop: "1px solid #000", paddingTop: "40px", paddingBottom: "40px", textAlign: "center" }}>
        <p style={{ fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px" }}>Honey & Amber Co.</p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "15px" }}>
          
          <Link 
            to="/privacy-policy" 
            style={{ textDecoration: "none", color: "#666", fontSize: "14px" }}
            onMouseEnter={(e) => e.target.style.color = "#000"}
            onMouseLeave={(e) => e.target.style.color = "#666"}
          >
            Privacy Policy
          </Link>

          <Link 
            to="/terms-and-conditions" 
            style={{ textDecoration: "none", color: "#666", fontSize: "14px" }}
            onMouseEnter={(e) => e.target.style.color = "#000"}
            onMouseLeave={(e) => e.target.style.color = "#666"}
          >
            Terms and Conditions
          </Link>

          <Link 
            to="/cookie-policy" 
            style={{ textDecoration: "none", color: "#666", fontSize: "14px" }}
            onMouseEnter={(e) => e.target.style.color = "#000"}
            onMouseLeave={(e) => e.target.style.color = "#666"}
          >
            Cookie Policy
          </Link>
        </div>

        <p style={{ marginTop: "20px", fontSize: "12px", color: "#999" }}>
          © 2026 Honey & Amber Co. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default BestsellersPage;