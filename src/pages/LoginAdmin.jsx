import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  // Додаємо стан для зберігання помилки
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Скидаємо помилку при новій спробі

    const ADMIN_EMAIL = "mariadudak28@gmail.com";

    // 1. Перевірка чи заповнені поля
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // 2. Перевірка конкретної пошти
    if (email !== ADMIN_EMAIL) {
      setError("Please enter a valid admin email");
      return;
    }

    // 3. Якщо пошта вірна (тут можна додати ще перевірку пароля)
    if (rememberMe) {
      localStorage.setItem("rememberAdmin", "true");
    }
    
    // Перехід на сторінку дашборду
    navigate("/owner-dashboard");
  };

  const inputGroupStyle = {
    marginBottom: "20px",
    position: "relative",
  };

  const inputStyle = {
    width: "100%",
    padding: "15px 15px 15px 45px",
    border: "1px solid #000",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    letterSpacing: "0.5px",
  };

  const iconStyle = {
    position: "absolute",
    left: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#000",
  };

  const eyeIconStyle = {
    position: "absolute",
    right: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#888",
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      backgroundColor: "#fff",
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ 
        width: "100%", 
        maxWidth: "400px", 
        padding: "40px", 
        textAlign: "center" 
      }}>
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "3px", textTransform: "uppercase", margin: 0 }}>
            Honey & Amber
          </h1>
          <p style={{ fontSize: "10px", letterSpacing: "2px", color: "#888", marginTop: "5px" }}>
            ADMINISTRATION PORTAL
          </p>
        </div>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div style={inputGroupStyle}>
            <FiMail style={iconStyle} />
            <input 
              type="email" 
              placeholder="ADMIN EMAIL" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                ...inputStyle,
                borderColor: error && email !== "mariadudak28@gmail.com" ? "red" : "#000"
              }}
              required 
            />
          </div>

          {/* Password */}
          <div style={inputGroupStyle}>
            <FiLock style={iconStyle} />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="PASSWORD" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required 
            />
            <div onClick={() => setShowPassword(!showPassword)} style={eyeIconStyle}>
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </div>
          </div>

          {/* Відображення помилки */}
          {error && (
            <div style={{ 
              color: "red", 
              fontSize: "12px", 
              marginBottom: "15px", 
              textAlign: "left",
              fontWeight: "600" 
            }}>
              {error}
            </div>
          )}

          {/* Remember & Forgot */}
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginBottom: "30px",
            fontSize: "12px"
          }}>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                style={{ accentColor: "#000" }} 
              />
              REMEMBER ME
            </label>
            
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            style={{ 
              width: "100%", 
              padding: "18px", 
              backgroundColor: "#000", 
              color: "#fff", 
              border: "none", 
              fontWeight: "700", 
              letterSpacing: "2px", 
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              transition: "0.3s"
            }}
          >
            LOG IN TO DASHBOARD <FiArrowRight />
          </button>
        </form>

        <div style={{ marginTop: "40px" }}>
          <Link to="/" style={{ fontSize: "12px", color: "#888", textDecoration: "none" }}>
            ← BACK TO STORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;