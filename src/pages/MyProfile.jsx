import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiCamera, FiUser, FiHeart, FiLogOut, FiTrash2 } from "react-icons/fi";
import Header from "../components/Header";

const MyProfile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("Profile");
  const [avatar, setAvatar] = useState(localStorage.getItem("userAvatar") || null);
  const [wishlist, setWishlist] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  // Стан для даних користувача
  const [formData, setFormData] = useState({
    firstName: "Guest",
    lastName: "",
    email: "Not provided",
    phone: "",
    location: "Not set",
    birthDate: "Not set",
  });

  // --- ЗАВАНТАЖЕННЯ ДАНИХ ПРИ ВХОДІ ---
  useEffect(() => {
    // Дістаємо основний об'єкт, який ми створили при реєстрації
    const savedUser = JSON.parse(localStorage.getItem("userCredentials"));
    
    if (savedUser) {
      setFormData({
        firstName: savedUser.firstName || "Guest",
        lastName: savedUser.lastName || "",
        email: savedUser.email || "",
        phone: savedUser.phone || "",
        location: savedUser.location || "Not set",
        birthDate: savedUser.birthDate || "Not set",
      });
    }

    if (activeCategory === "Wishlist") {
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlist(savedWishlist);
    }
  }, [activeCategory]);

  const handleLogout = () => {
    // Видаляємо лише статус входу, щоб дані реєстрації залишилися в "базі"
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setAvatar(base64String);
        localStorage.setItem("userAvatar", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- ЗБЕРЕЖЕННЯ ОНОВЛЕНИХ ДАНИХ ---
  const handleSave = () => {
    // Оновлюємо об'єкт у форматі, який розуміє сторінка входу
    const updatedUser = {
      ...JSON.parse(localStorage.getItem("userCredentials")), // беремо старі дані (напр. пароль)
      ...formData // накладаємо нові дані з форми
    };

    localStorage.setItem("userCredentials", JSON.stringify(updatedUser));
    setIsEditing(false);
    alert("Profile information updated!");
  };

  const removeFromWishlist = (productId) => {
    const updated = wishlist.filter(item => item.id !== productId);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // СТИЛІ (залишаються без змін)
  const menuBtnStyle = (category) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "15px 20px",
    width: "100%",
    background: activeCategory === category ? "#f5f5f5" : "none",
    border: "none",
    borderLeft: activeCategory === category ? "4px solid #000" : "4px solid transparent",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: activeCategory === category ? "700" : "400",
    transition: "0.3s"
  });

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none"
  };

  return (
    <>
      <Header />
      <div style={{ maxWidth: "1000px", margin: "60px auto", padding: "0 20px", display: "flex", gap: "40px", flexWrap: "wrap" }}>
        
        {/* SIDEBAR */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div style={{ position: "relative", width: "120px", height: "120px", margin: "0 auto 15px auto" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "#eee", overflow: "hidden", border: "2px solid #000", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {avatar ? <img src={avatar} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <FiUser size={50} color="#ccc" />}
              </div>
              <button 
                onClick={() => fileInputRef.current.click()} 
                style={{ position: "absolute", bottom: "5px", right: "5px", backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "50%", width: "35px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
              >
                <FiCamera size={18} />
              </button>
            </div>
            <input type="file" ref={fileInputRef} onChange={handleAvatarChange} accept="image/*" style={{ display: "none" }} />
            <h3 style={{ textTransform: "uppercase", margin: "0", wordBreak: "break-word" }}>
              {formData.firstName} {formData.lastName}
            </h3>
          </div>

          <nav style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={() => setActiveCategory("Profile")} style={menuBtnStyle("Profile")}><FiUser /> Profile</button>
            <button onClick={() => setActiveCategory("Wishlist")} style={menuBtnStyle("Wishlist")}><FiHeart /> Wishlist</button>
            <button onClick={handleLogout} style={{ ...menuBtnStyle("Logout"), color: "red", marginTop: "20px" }}><FiLogOut /> Go back</button>
          </nav>
        </div>

        {/* CONTENT AREA */}
        <div style={{ flex: "2", minWidth: "300px", borderLeft: "1px solid #eee", paddingLeft: "40px" }}>
          <h2 style={{ textTransform: "uppercase", borderBottom: "2px solid #000", paddingBottom: "10px", marginBottom: "30px" }}>
            {activeCategory}
          </h2>

          {activeCategory === "Profile" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "FIRST NAME", name: "firstName" },
                { label: "LAST NAME", name: "lastName" },
                { label: "EMAIL", name: "email" },
                { label: "PHONE", name: "phone" },
                { label: "LOCATION", name: "location" },
                { label: "BIRTHDAY", name: "birthDate" },
              ].map((field) => (
                <div key={field.name}>
                  <label style={{ fontSize: "12px", color: "#888" }}>{field.label}</label>
                  {isEditing ? (
                    <input type="text" name={field.name} value={formData[field.name]} onChange={handleChange} style={inputStyle} />
                  ) : (
                    <p style={{ margin: "5px 0", fontSize: "18px", fontWeight: "500" }}>{formData[field.name]}</p>
                  )}
                </div>
              ))}
              <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                {isEditing ? (
                  <>
                    <button onClick={handleSave} style={{ padding: "12px 25px", background: "#000", color: "#fff", border: "1px solid #000", cursor: "pointer", fontWeight: "700" }}>SAVE CHANGES</button>
                    <button onClick={() => setIsEditing(false)} style={{ padding: "12px 25px", background: "none", color: "#000", border: "1px solid #000", cursor: "pointer", fontWeight: "700" }}>CANCEL</button>
                  </>
                ) : (
                  <button onClick={() => setIsEditing(true)} style={{ padding: "12px 25px", border: "1px solid #000", background: "none", cursor: "pointer", fontWeight: "700" }}>EDIT INFORMATION</button>
                )}
              </div>
            </div>
          )}

          {/* Wishlist logic (без змін) */}
          {activeCategory === "Wishlist" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "20px" }}>
              {wishlist.length > 0 ? (
                wishlist.map((item) => (
                  <div key={item.id} style={{ border: "1px solid #eee", padding: "15px", textAlign: "center", position: "relative" }}>
                    <Link to={`/product/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <img src={item.image} alt={item.name} style={{ width: "100%", height: "150px", objectFit: "contain", marginBottom: "10px" }} />
                        <h4 style={{ fontSize: "14px", marginBottom: "5px", textTransform: "uppercase" }}>{item.name}</h4>
                    </Link>
                    <p style={{ fontWeight: "700" }}>{item.price} UAH</p>
                    <button onClick={() => removeFromWishlist(item.id)} style={{ position: "absolute", top: "10px", right: "10px", background: "white", border: "none", cursor: "pointer", color: "#ff4d4d", borderRadius: "50%", padding: "5px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                ))
              ) : (
                <p>Your wishlist is empty.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyProfile;