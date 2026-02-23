import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiCalendar, FiEye, FiEyeOff } from "react-icons/fi";
import Header from "../components/Header";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dateInputRef = useRef(null);

  // Form Field States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("+380");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateText, setDateText] = useState("");
  const [location, setLocation] = useState("");

  const inputStyle = {
    padding: "12px 5px",
    border: "none",
    borderBottom: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
    width: "100%",
  };

  const buttonStyle = {
    padding: "14px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
    textTransform: "uppercase",
    marginTop: "20px",
  };

  // Phone Input Handling
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    const limit = countryCode === "+380" ? 9 : 10;
    if (value.length > limit) value = value.slice(0, limit);
    setPhoneNumber(value);
  };

  // Date Handling
  const handleDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 3) value = value.slice(0, 2) + "/" + value.slice(2);
    if (value.length >= 6) value = value.slice(0, 5) + "/" + value.slice(5, 7);
    value = value.slice(0, 8);
    setDateText(value);
  };

  // --- REGISTRATION LOGIC ---
  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !firstName || !lastName || !phoneNumber) {
      alert("Please fill in all required fields!");
      return;
    }

    // Create user object
    const userData = {
      email,
      password,
      firstName,
      lastName,
      phone: countryCode + phoneNumber,
      birthDate: dateText,
      location
    };

    // Store in localStorage (Simulating a database)
    localStorage.setItem("userCredentials", JSON.stringify(userData));
    
    alert("Registration successful! You can now log in.");
    setActiveTab("login"); // Switch to login tab
    setPassword(""); // Clear password for security
  };

  // --- LOGIN LOGIC ---
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored data
    const savedUser = JSON.parse(localStorage.getItem("userCredentials"));

    if (!savedUser) {
      alert("You are not registered yet! Please create an account.");
      setActiveTab("register");
      return;
    }

    // Check email and password match
    if (savedUser.email === email && savedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUserEmail", email);
      console.log("Access Granted");
      navigate("/profile"); // Redirect to account/profile page
    } else {
      alert("Invalid email or password!");
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    alert(`Instructions have been sent to ${email}`);
    setForgotPassword(false);
  };

  return (
    <>
      <Header />
      <div style={{ maxWidth: "500px", margin: "60px auto", padding: "0 20px" }}>
        
        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
          <button
            onClick={() => { setActiveTab("login"); setForgotPassword(false); }}
            style={{
              background: "none",
              border: "none",
              borderBottom: activeTab === "login" ? "2px solid #000" : "1px solid #ccc",
              padding: "10px 0",
              fontWeight: activeTab === "login" ? "700" : "400",
              fontSize: "16px",
              cursor: "pointer",
              width: "50%"
            }}
          >
            LOGIN
          </button>
          <button
            onClick={() => { setActiveTab("register"); setForgotPassword(false); }}
            style={{
              background: "none",
              border: "none",
              borderBottom: activeTab === "register" ? "2px solid #000" : "1px solid #ccc",
              padding: "10px 0",
              fontWeight: activeTab === "register" ? "700" : "400",
              fontSize: "16px",
              cursor: "pointer",
              width: "50%"
            }}
          >
            REGISTER
          </button>
        </div>

        {/* REGISTRATION FORM */}
        {activeTab === "register" && (
          <form onSubmit={handleRegisterSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} required />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} required />
            
            <div style={{ display: "flex", gap: "10px" }}>
              <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} style={{ ...inputStyle, width: "30%" }}>
                <option value="+380">+380</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneChange} style={{ ...inputStyle, width: "70%" }} required />
            </div>

            <div style={{ position: "relative" }}>
              <input type="text" placeholder="MM/DD/YY" value={dateText} onChange={handleDateChange} style={inputStyle} />
              <FiCalendar 
                onClick={() => dateInputRef.current.showPicker()} 
                style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }} 
              />
              <input ref={dateInputRef} type="date" style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} 
                onChange={(e) => {
                  const [y, m, d] = e.target.value.split("-");
                  setDateText(`${m}/${d}/${y.slice(2)}`);
                }} 
              />
            </div>

            <div style={{ position: "relative" }}>
              <input type={showPassword ? "text" : "password"} placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} required />
              <span onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            <input type="text" placeholder="Location (City, Country)" value={location} onChange={(e) => setLocation(e.target.value)} style={inputStyle} />
            
            <button type="submit" style={buttonStyle}>Create Account</button>
          </form>
        )}

        {/* LOGIN FORM */}
        {activeTab === "login" && !forgotPassword && (
          <form onSubmit={handleLoginSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
            
            <div style={{ position: "relative" }}>
              <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} required />
              <span onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <input type="checkbox" /> Remember me
              </label>
              
            </div>

            <button type="submit" style={buttonStyle}>Sign In</button>
          </form>
        )}

        {/* FORGOT PASSWORD FORM */}
        {activeTab === "login" && forgotPassword && (
          <form onSubmit={handleForgotPasswordSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p>Enter your email to reset your password:</p>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
            <button type="submit" style={buttonStyle}>Send Link</button>
            <span style={{ color: "blue", cursor: "pointer", textAlign: "center" }} onClick={() => setForgotPassword(false)}>Back to Login</span>
          </form>
        )}
      </div>

      <footer style={{ textAlign: "center", padding: "40px 0", borderTop: "1px solid #000", marginTop: "40px" }}>
        <p style={{ fontWeight: "700" }}>Honey & Amber Co.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "10px", fontSize: "12px" }}>
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
          <span>Cookie Policy</span>
        </div>
      </footer>
    </>
  );
};

export default AccountPage;