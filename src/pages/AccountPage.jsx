import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiCalendar, FiEye, FiEyeOff } from "react-icons/fi";
import Header from "../components/Header";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dateInputRef = useRef(null);

  // Поля форми
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    countryCode: "+380",
    phone: "",
    birthday: "",
    password: "",
    location: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Створюємо повний об'єкт користувача
    const userToSave = {
      ...formData,
      fullName: `${formData.firstName} ${formData.lastName}`,
      avatar: "https://via.placeholder.com/150", // Дефолтне фото
      wishlist: [],
      orders: []
    };

    // Зберігаємо в локальну пам'ять браузера
    localStorage.setItem("currentUser", JSON.stringify(userToSave));
    
    // Перенаправляємо в профіль
    navigate("/profile");
  };

  // Стилі
  const inputStyle = {
    padding: "15px 5px",
    border: "none",
    borderBottom: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
    width: "100%",
    backgroundColor: "transparent"
  };

  const buttonStyle = {
    padding: "16px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
    textTransform: "uppercase",
    marginTop: "30px",
    letterSpacing: "1px"
  };

  return (
    <>
      <Header />
      <div style={{ maxWidth: "450px", margin: "80px auto", padding: "0 20px" }}>
        
        {/* Перемикач Вхід / Реєстрація */}
        <div style={{ display: "flex", marginBottom: "40px", borderBottom: "1px solid #eee" }}>
          <button 
            onClick={() => setActiveTab("login")}
            style={{ flex: 1, padding: "15px", background: "none", border: "none", borderBottom: activeTab === "login" ? "2px solid #000" : "none", fontWeight: activeTab === "login" ? "700" : "400", cursor: "pointer" }}
          >
            LOGIN
          </button>
          <button 
            onClick={() => setActiveTab("register")}
            style={{ flex: 1, padding: "15px", background: "none", border: "none", borderBottom: activeTab === "register" ? "2px solid #000" : "none", fontWeight: activeTab === "register" ? "700" : "400", cursor: "pointer" }}
          >
            REGISTER
          </button>
        </div>

        {activeTab === "register" ? (
          <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} style={inputStyle} required />
            
            <div style={{ display: "flex", gap: "20px" }}>
              <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} style={inputStyle} required />
              <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} style={inputStyle} required />
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
              <select name="countryCode" onChange={handleChange} style={{ ...inputStyle, width: "100px", fontSize: "14px" }}>
                <option value="+380">UA +38</option>
                <option value="+1">US +1</option>
                <option value="+44">UK +44</option>
              </select>
              <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} style={inputStyle} required />
            </div>

            <div style={{ position: "relative" }}>
              <input 
                type="text" 
                name="birthday"
                placeholder="Birthday (MM/DD/YY)" 
                value={formData.birthday}
                readOnly
                onClick={() => dateInputRef.current.showPicker()}
                style={inputStyle} 
              />
              <FiCalendar style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", color: "#888", cursor: "pointer" }} />
              <input 
                ref={dateInputRef} 
                type="date" 
                style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} 
                onChange={(e) => setFormData({...formData, birthday: e.target.value})}
              />
            </div>

            <div style={{ position: "relative" }}>
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                placeholder="Password" 
                onChange={handleChange} 
                style={inputStyle} 
                required 
              />
              <span 
                onClick={() => setShowPassword(!showPassword)} 
                style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "#888" }}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            <input type="text" name="location" placeholder="City / Location" onChange={handleChange} style={inputStyle} />

            <button type="submit" style={buttonStyle}>Create Account</button>
          </form>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <p>Welcome back! Please enter your details.</p>
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="password" placeholder="Password" style={inputStyle} />
            <button style={buttonStyle} onClick={() => navigate("/profile")}>Sign In</button>
          </div>
        )}
      </div>
    </>
  );
};

export default AccountPage;