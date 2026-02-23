import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const staticProducts = [
  { id: 1, description: "Ordinary Tonic", price: 20, oldPrice: 35, image: "/img/n4.jpg" },
  { id: 2, description: "Ordinary Serum", price: 40, image: "/img/n5.jpg" },
  { id: 3, description: "Ordinary face cream", price: 20, oldPrice: 35, image: "/img/n6.jpg" },
  { id: 4, description: "Dior Roller", price: 20, image: "/img/n1.jpg" },
  { id: 5, description: "Dior Washing gel", price: 20, image: "/img/n2.jpg" },
  { id: 6, description: "Dior Essence", price: 20, image: "/img/n3.jpg" },
  { id: 7, description: "Centela Eye cream", price: 20, image: "/img/w1.jpg" },
  { id: 8, description: "Centela Tone", price: 20, image: "/img/w2.jpg" },
  { id: 9, description: "Centela Tone Bright", price: 20, image: "/img/w3.jpg" },
  { id: 10, description: "Dior Eye Rich cream", price: 20, image: "/img/g2.jpg" },
  { id: 11, description: "Dior Prestige Balme", price: 20, image: "/img/le.jpg" },
  { id: 12, description: "Dior Le Nectar", price: 20, image: "/img/g4.jpg" },
];

const SkinCarePage = () => {
  const [showMoreProducts, setShowMoreProducts] = useState(false);
  const [favorites, setFavorites] = useState({});
  const [allProducts, setAllProducts] = useState(staticProducts);
  const { addItemToCart, setCartItems } = useCart();

  useEffect(() => {
    // Favorites завантаження
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const favoritesMap = {};
    savedWishlist.forEach(item => {
      favoritesMap[item.id] = true;
    });
    setFavorites(favoritesMap);

    // Додані товари від власника
    const ownerItems = JSON.parse(localStorage.getItem("ownerProducts")) || [];
    const combinedProducts = [...ownerItems, ...staticProducts];
    setAllProducts(combinedProducts);

    // Синхронізація кошика
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (currentCart.length > 0 && setCartItems) {
      const filteredCart = currentCart.filter(cartItem => 
        combinedProducts.some(p => String(p.id) === String(cartItem.id).split('-')[0])
      );

      if (filteredCart.length !== currentCart.length) {
        localStorage.setItem("cart", JSON.stringify(filteredCart));
        setCartItems(filteredCart);
      }
    }
  }, [setCartItems]);

  const toggleFavorite = (product) => {
    const currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isExist = currentWishlist.find(item => item.id === product.id);
    
    let updatedWishlist;
    if (isExist) {
      updatedWishlist = currentWishlist.filter(item => item.id !== product.id);
    } else {
      updatedWishlist = [...currentWishlist, { 
        id: product.id, 
        name: product.description, 
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

  const visibleProducts = showMoreProducts ? allProducts : allProducts.slice(0, 6);

  return (
    <div>
      <style>{`
        /* Базовий стиль сітки */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Стиль кнопки для ноутбука */
        .add-to-cart-btn {
          width: 30%; 
          padding: 12px 0;
          background-color: #000;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 13px;
          transition: background-color 0.2s ease;
        }

        .add-to-cart-btn:hover {
          background-color: #333;
        }

        /* Адаптив для iPhone / Смартфонів */
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 колонки на телефоні */
            gap: 30px 15px;
          }

          .add-to-cart-btn {
            width: 100% !important; /* На iPhone кнопка на всю ширину */
            font-size: 12px;
            padding: 14px 0;
          }
        }

        @media (max-width: 480px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr); /* Можна змінити на 1, якщо товари занадто дрібні */
          }
        }
      `}</style>

      <Header />

      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "10px" }}>
          Professional care for your skin
        </h2>
        <p style={{ color: "#666" }}>Choose your ideal care</p>
      </section>

      <section className="products-grid">
        {visibleProducts.map((p) => (
          <div key={p.id} style={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
            
            <div style={{ position: "relative" }}>
              <div style={{ 
                position: "absolute", 
                top: "12px", 
                left: "12px", 
                right: "12px", 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                zIndex: 3 
              }}>
                {p.oldPrice ? (
                  <div style={{
                    backgroundColor: "#d9534f",
                    color: "#fff",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                  }}>
                    Sale
                  </div>
                ) : <div />}

                <button 
                  onClick={() => toggleFavorite(p)} 
                  style={{
                    background: "white",
                    border: "1px solid #000",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    fontSize: "18px",
                    color: "#000", 
                    transition: "all 0.2s ease"
                  }}
                >
                  {favorites[p.id] ? "♥" : "♡"}
                </button>
              </div>
              
              <Link to={`/product/${p.id}`}>
                <img
                  src={p.image}
                  alt={p.description}
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    borderRadius: "8px",
                    cursor: "pointer",
                    display: "block"
                  }}
                />
              </Link>
            </div>

            <div style={{ borderTop: "1px solid #000", marginTop: "8px", paddingTop: "8px", flexGrow: 1 }}>
              <p style={{ margin: "4px 0", fontWeight: "600" }}>{p.description}</p>
              
              <div style={{ marginBottom: "12px" }}>
                {p.oldPrice ? (
                  <p style={{ margin: 0 }}>
                    <span style={{ textDecoration: "line-through", color: "#888", marginRight: "10px", fontSize: "14px" }}>
                      ₴{p.oldPrice},00
                    </span>
                    <span style={{ color: "#d9534f", fontWeight: "700" }}>
                      ₴{p.price},00
                    </span>
                  </p>
                ) : (
                  <p style={{ margin: 0 }}>₴{p.price},00</p>
                )}
              </div>
              
              <button
                className="add-to-cart-btn"
                onClick={() => addItemToCart({ 
                  id: `${p.id}-250ml`, 
                  description: p.description, 
                  price: p.price, 
                  image: p.image,
                  volume: "250ml"
                })}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </section>

      <div style={{ textAlign: "center", margin: "60px 0" }}>
        <button
          onClick={() => setShowMoreProducts((prev) => !prev)}
          style={{ 
            padding: "12px 48px", 
            border: "1px solid #000", 
            background: "transparent", 
            cursor: "pointer", 
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#000";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#000";
          }}
        >
          {showMoreProducts ? "Close" : "More products"}
        </button>
      </div>

      <footer style={{ marginTop: "60px", borderTop: "1px solid #000", paddingTop: "20px", paddingBottom: "40px", textAlign: "center" }}>
        <p style={{ fontWeight: "bold" }}>Honey & Amber Co.</p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "10px" }}>
          <Link to="/privacy-policy" style={{ textDecoration: "none", color: "#666" }}>Privacy Policy</Link>
          <Link to="/terms-and-conditions" style={{ textDecoration: "none", color: "#666" }}>Terms and Conditions</Link>
          <Link to="/cookie-policy" style={{ textDecoration: "none", color: "#666" }}>Cookie Policy</Link>
        </div>
        <p style={{ marginTop: "20px", fontSize: "12px", color: "#999" }}>
          © 2026 Honey & Amber Co. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SkinCarePage;