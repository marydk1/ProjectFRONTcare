import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiCamera, FiUser, FiPlusCircle, FiLogOut, FiUploadCloud, FiTag, FiTrash2, FiMapPin, FiMail, FiPhone, FiCalendar, FiEdit2, FiCheck, FiX } from "react-icons/fi";
import Header from "../components/Header";

// 1. Статичні дані з усіх сторінок
const staticProducts = [
  // SkinCare
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
  // Novelty
  { id: 4, description: "Dior Patches", price: 20, image: "/img/dior4.jpg", category: "Novelty" },
  { id: 6, description: "Dior Essence", price: 20, image: "/img/dior3.jpg", category: "Novelty" },
  { id: 5, description: "Peeling Rose", price: 20, image: "/img/n2.jpg", category: "Novelty" },
  { id: 7, description: "Aqua Serum", price: 20, image: "/img/w1.jpg", category: "Novelty" },
  { id: 9, description: "Zen Balm", price: 20, image: "/img/w3.jpg", category: "Novelty" },
  // Bestsellers
  { id: 10, description: "Dior Eye Rich cream", price: 20, image: "/img/g2.jpg", category: "Bestsellers" },
  { id: 12, description: "Dior Le Nectar", price: 20, image: "/img/g4.jpg", category: "Bestsellers" },
  { id: 11, description: "Dior Prestige Balme", price: 20, image: "/img/le.jpg", category: "Bestsellers" },
];

const OwnerProfile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const productPhotoRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("Account");
  const [avatar, setAvatar] = useState(localStorage.getItem("ownerAvatar") || null);
  
  // Товари, додані власником вручну
  const [ownerProducts, setOwnerProducts] = useState([]);
  // Список ID статичних товарів, які власник вирішив видалити
  const [deletedStaticIds, setDeletedStaticIds] = useState([]);
  
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: localStorage.getItem("ownerFirstName") || "Admin",
    lastName: localStorage.getItem("ownerLastName") || "User",
    email: localStorage.getItem("ownerEmail") || "owner@honeyamber.com",
    phone: localStorage.getItem("ownerPhone") || "+380 00 000 00 00",
    location: localStorage.getItem("ownerLocation") || "Lviv, Ukraine",
    birthDate: localStorage.getItem("ownerBirthDate") || "1990-01-01",
  });

  const [tempData, setTempData] = useState({ ...formData });

  useEffect(() => {
    const savedOwnerItems = JSON.parse(localStorage.getItem("ownerProducts")) || [];
    const savedDeletedIds = JSON.parse(localStorage.getItem("deletedStaticIds")) || [];
    setOwnerProducts(savedOwnerItems);
    setDeletedStaticIds(savedDeletedIds);
  }, []);

  // Об'єднаний список для відображення в Inventory
  const allInventory = [
    ...staticProducts.filter(p => !deletedStaticIds.includes(p.id)),
    ...ownerProducts
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const startEditing = () => {
    setTempData({ ...formData });
    setIsEditing(true);
  };

  const cancelEditing = () => setIsEditing(false);

  const saveProfileChanges = () => {
    setFormData(tempData);
    Object.keys(tempData).forEach(key => localStorage.setItem(`owner${key.charAt(0).toUpperCase() + key.slice(1)}`, tempData[key]));
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        localStorage.setItem("ownerAvatar", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [newProduct, setNewProduct] = useState({ name: "", price: "", discount: "", image: null });

  const handleProductPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewProduct(prev => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const productToAdd = {
      id: `manual-${Date.now()}`, // Унікальний ID для нових товарів
      description: newProduct.name,
      price: Number(newProduct.price),
      oldPrice: newProduct.discount ? Math.round(Number(newProduct.price) * (1 + Number(newProduct.discount) / 100)) : null,
      image: newProduct.image || "https://via.placeholder.com/300",
      category: "Added manually"
    };
    const updated = [productToAdd, ...ownerProducts];
    setOwnerProducts(updated);
    localStorage.setItem("ownerProducts", JSON.stringify(updated));
    setNewProduct({ name: "", price: "", discount: "", image: null });
    alert("Product published!");
  };

  // Універсальна функція видалення
  const deleteFromInventory = (id) => {
    if (window.confirm("Are you sure you want to remove this product from the store?")) {
      // Якщо це статичний товар (числові ID), додаємо в список видалених
      if (typeof id === 'number') {
        const updatedDeleted = [...deletedStaticIds, id];
        setDeletedStaticIds(updatedDeleted);
        localStorage.setItem("deletedStaticIds", JSON.stringify(updatedDeleted));
      } else {
        // Якщо це вручну доданий товар (string ID)
        const updatedOwner = ownerProducts.filter(p => p.id !== id);
        setOwnerProducts(updatedOwner);
        localStorage.setItem("ownerProducts", JSON.stringify(updatedOwner));
      }
    }
  };

  // Стилі
  const menuBtnStyle = (category) => ({
    display: "flex", alignItems: "center", gap: "12px", padding: "15px 20px", width: "100%",
    background: activeCategory === category ? "#000" : "none",
    color: activeCategory === category ? "#fff" : "#000",
    border: "none", textAlign: "left", cursor: "pointer", fontSize: "14px", fontWeight: "600",
    textTransform: "uppercase", transition: "0.3s", marginBottom: "5px"
  });

  const inputStyle = {
    width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ddd",
    fontSize: "14px", outline: "none", boxSizing: "border-box"
  };

  return (
    <>
      <Header />
      <div style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px", display: "flex", gap: "50px", flexWrap: "wrap" }}>
        
        {/* SIDEBAR */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          <div style={{ textAlign: "center", marginBottom: "30px", padding: "30px", border: "1px solid #000" }}>
            <div style={{ position: "relative", width: "100px", height: "100px", margin: "0 auto 15px auto" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "#eee", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #000" }}>
                {avatar ? <img src={avatar} alt="Owner" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <FiUser size={40} color="#000" />}
              </div>
              <button onClick={() => fileInputRef.current.click()} style={{ position: "absolute", bottom: "0", right: "0", backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "50%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <FiCamera size={14} />
              </button>
            </div>
            <input type="file" ref={fileInputRef} onChange={handleAvatarChange} accept="image/*" style={{ display: "none" }} />
            
            {isEditing ? (
              <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
                <input style={inputStyle} value={tempData.firstName} onChange={(e) => setTempData({...tempData, firstName: e.target.value})} placeholder="First Name" />
                <input style={inputStyle} value={tempData.lastName} onChange={(e) => setTempData({...tempData, lastName: e.target.value})} placeholder="Last Name" />
              </div>
            ) : (
              <h3 style={{ textTransform: "uppercase", margin: "0", fontSize: "16px", letterSpacing: "1px" }}>{formData.firstName} {formData.lastName}</h3>
            )}
            <p style={{ color: "#888", fontSize: "12px", marginTop: "5px" }}>STORE ADMINISTRATOR</p>
          </div>

          <nav style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={() => setActiveCategory("Account")} style={menuBtnStyle("Account")}><FiUser size={18} /> Account Info</button>
            <button onClick={() => setActiveCategory("Add Product")} style={menuBtnStyle("Add Product")}><FiPlusCircle size={18} /> Add New Product</button>
            <button onClick={() => setActiveCategory("Inventory")} style={menuBtnStyle("Inventory")}><FiTrash2 size={18} /> Manage Inventory</button>
            <button onClick={handleLogout} style={{ ...menuBtnStyle("Logout"), color: "#ff4d4d", marginTop: "20px", border: "1px solid #ff4d4d" }}><FiLogOut size={18} /> Log Out</button>
          </nav>
        </div>

        {/* CONTENT AREA */}
        <div style={{ flex: "2", minWidth: "350px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", borderBottom: "2px solid #000", paddingBottom: "10px" }}>
            <h2 style={{ textTransform: "uppercase", fontSize: "22px", letterSpacing: "2px", margin: 0 }}>
              {activeCategory === "Account" ? "Owner Account" : activeCategory}
            </h2>
            
            {activeCategory === "Account" && (
              <div>
                {!isEditing ? (
                  <button onClick={startEditing} style={{ display: "flex", alignItems: "center", gap: "5px", background: "#000", color: "#fff", border: "none", padding: "8px 15px", cursor: "pointer", fontSize: "12px" }}>
                    <FiEdit2 /> EDIT INFORMATION
                  </button>
                ) : (
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button onClick={saveProfileChanges} style={{ display: "flex", alignItems: "center", gap: "5px", background: "#28a745", color: "#fff", border: "none", padding: "8px 15px", cursor: "pointer", fontSize: "12px" }}>
                      <FiCheck /> SAVE CHANGES
                    </button>
                    <button onClick={cancelEditing} style={{ display: "flex", alignItems: "center", gap: "5px", background: "#dc3545", color: "#fff", border: "none", padding: "8px 15px", cursor: "pointer", fontSize: "12px" }}>
                      <FiX /> CANCEL
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {activeCategory === "Account" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "EMAIL ADDRESS", icon: <FiMail />, key: "email" },
                { label: "PHONE NUMBER", icon: <FiPhone />, key: "phone" },
                { label: "LOCATION", icon: <FiMapPin />, key: "location" },
                { label: "BIRTHDAY", icon: <FiCalendar />, key: "birthDate", type: "date" }
              ].map((field) => (
                <div key={field.key} style={{ display: "flex", alignItems: "center", gap: "15px", padding: "15px", background: "#f9f9f9" }}>
                  {field.icon}
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: "10px", color: "#888", display: "block", fontWeight: "bold" }}>{field.label}</label>
                    {isEditing ? (
                      <input 
                        type={field.type || "text"} 
                        style={inputStyle} 
                        value={tempData[field.key]} 
                        onChange={(e) => setTempData({...tempData, [field.key]: e.target.value})}
                      />
                    ) : (
                      <strong>{formData[field.key]}</strong>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeCategory === "Add Product" && (
            <form onSubmit={handleAddProduct} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div onClick={() => productPhotoRef.current.click()} style={{ width: "100%", height: "250px", border: "2px dashed #000", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", background: "#fcfcfc" }}>
                    {newProduct.image ? <img src={newProduct.image} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "contain" }} /> : <><FiUploadCloud size={40} /><p style={{ fontSize: "14px", marginTop: "10px", fontWeight: "600" }}>CLICK TO UPLOAD PRODUCT IMAGE</p></>}
                </div>
                <input type="file" ref={productPhotoRef} onChange={handleProductPhoto} accept="image/*" style={{ display: "none" }} />
                <div>
                    <label style={{ fontSize: "12px", fontWeight: "700" }}>PRODUCT NAME</label>
                    <input required type="text" placeholder="e.g. Dior Hydrating Serum" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} style={inputStyle} />
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                    <div style={{ flex: 1 }}>
                        <label style={{ fontSize: "12px", fontWeight: "700" }}>PRICE (UAH)</label>
                        <input required type="number" placeholder="0.00" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} style={inputStyle} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={{ fontSize: "12px", fontWeight: "700" }}>DISCOUNT % (OPTIONAL)</label>
                        <div style={{ position: "relative" }}>
                            <input type="number" placeholder="10" value={newProduct.discount} onChange={(e) => setNewProduct({...newProduct, discount: e.target.value})} style={inputStyle} />
                            <FiTag style={{ position: "absolute", right: "12px", top: "18px", color: "#888" }} />
                        </div>
                    </div>
                </div>
                <button type="submit" style={{ padding: "18px", background: "#000", color: "#fff", border: "none", cursor: "pointer", fontWeight: "700", letterSpacing: "1px" }}>PUBLISH TO STORE</button>
            </form>
          )}

          {activeCategory === "Inventory" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <p style={{ fontSize: "12px", color: "#888", marginBottom: "10px" }}>Showing all products from SkinCare, Bestsellers, Novelty and Manual Additions.</p>
              {allInventory.length > 0 ? allInventory.map(product => (
                <div key={product.id} style={{ display: "flex", alignItems: "center", padding: "15px", border: "1px solid #eee", gap: "20px" }}>
                  <img src={product.image} alt="" style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "4px" }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: "0 0 5px 0", fontSize: "15px" }}>{product.description}</h4>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <p style={{ margin: 0, fontWeight: "700" }}>₴{product.price},00</p>
                        <span style={{ fontSize: "10px", background: "#eee", padding: "2px 6px", borderRadius: "10px", textTransform: "uppercase" }}>{product.category}</span>
                    </div>
                  </div>
                  <button onClick={() => deleteFromInventory(product.id)} style={{ background: "none", border: "none", color: "#ff4d4d", cursor: "pointer" }} title="Remove from store">
                    <FiTrash2 size={20} />
                  </button>
                </div>
              )) : <p style={{ textAlign: "center", color: "#888" }}>No products in the store.</p>}
            </div>
          )}
        </div>
      </div>

      <footer style={{ marginTop: "100px", borderTop: "1px solid #000", padding: "40px 0", textAlign: "center" }}>
        <p style={{ fontWeight: "700" }}>Honey & Amber Co.</p>
        <p style={{ fontSize: "11px", color: "#aaa" }}>© 2026 OWNER DASHBOARD. ALL RIGHTS RESERVED.</p>
      </footer>
    </>
  );
};

export default OwnerProfile;