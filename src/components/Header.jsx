import React, { useState } from "react";
import { FiUser, FiShoppingCart, FiSettings, FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from '../context/CartContext'; 

const Header = () => {
  const { cartItems, toggleCart } = useCart(); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSkinCareOpen, setIsSkinCareOpen] = useState(false);
  const [isSkinTypeOpen, setIsSkinTypeOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const goTo = (path) => {
    closeSidebar();
    setIsSkinCareOpen(false);
    setIsSkinTypeOpen(false);
    navigate(path);
  };

  const getNavLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      cursor: "pointer",
      fontWeight: isActive ? "600" : "400",
      color: "#000",
      display: "inline-block",
      paddingBottom: "4px",
      borderBottom: isActive ? "2px solid #888" : "2px solid transparent",
      transition: "border-bottom 0.2s ease-in-out"
    };
  };

  return (
    <>
      <style>{`
        /* Мобільні налаштування */
        @media (max-width: 900px) {
          .nav-menu { display: none !important; }
          .logo-text { font-size: 16px !important; flex-grow: 1; }
          .header-container { padding: 0 10px !important; }
          .icon-group { gap: 12px !important; }
        }

        /* Налаштування сайдбару */
        .sidebar-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100%;
          background: #fff;
          box-shadow: -5px 0 15px rgba(0,0,0,0.1);
          transition: right 0.3s ease-in-out;
          z-index: 1200;
          padding: 30px 20px;
          overflow-y: auto;
        }
        .sidebar-menu.active {
          right: 0;
        }

        @media (max-width: 480px) {
          .sidebar-menu { width: 85%; }
        }
      `}</style>

      <header style={{ padding: "15px 0", background: "#fff", position: "sticky", top: 0, zIndex: 1100 }}>
        <div className="header-container" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* ЛОГОТИП */}
          <div 
            className="logo-text"
            onClick={() => navigate("/")} 
            style={{ fontWeight: "700", fontSize: "1.2rem", cursor: "pointer", whiteSpace: "nowrap" }}
          >
            Honey & Amber Co.
          </div>

          {/* ДЕСКТОПНЕ МЕНЮ (ховається на мобільних) */}
          <nav className="nav-menu" style={{ display: "flex", justifyContent: "center", gap: "25px", flex: 1 }}>
            <span onClick={() => navigate("/")} style={getNavLinkStyle("/")}>Home</span>
            <span onClick={() => navigate("/skin-care")} style={getNavLinkStyle("/skin-care")}>SkinCare</span>
            <span onClick={() => navigate("/bestsellers")} style={getNavLinkStyle("/bestsellers")}>Bestsellers</span>
            <span onClick={() => navigate("/novelty")} style={getNavLinkStyle("/novelty")}>Novelty</span>
            <span onClick={() => navigate("/contact")} style={getNavLinkStyle("/contact")}>Contact</span>
          </nav>

          {/* ГРУПА ІКОНОК */}
          <div className="icon-group" style={{ display: "flex", gap: "18px", alignItems: "center" }}>
            <FiSettings 
              size={20} 
              style={{ cursor: "pointer", color: location.pathname === "/login-admin" ? "#888" : "#000" }} 
              onClick={() => navigate("/login-admin")} 
            />

            <FiUser 
              size={20} 
              style={{ cursor: "pointer", color: "#000" }} 
              onClick={() => navigate("/icons-page")} 
            />

            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <FiShoppingCart size={22} onClick={toggleCart} style={{ cursor: "pointer" }} />
              {cartItems.length > 0 && (
                <span style={{ position: 'absolute', top: '-8px', right: '-10px', background: '#000', borderRadius: '50%', color: 'white', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold' }}>
                  {cartItems.length}
                </span>
              )}
            </div>
            
            {/* КНОПКА МЕНЮ */}
            <div onClick={toggleSidebar} style={{ fontSize: "24px", cursor: "pointer", display: "flex", alignItems: "center" }}>
              {isSidebarOpen ? <FiX /> : <FiMenu />}
            </div>
          </div>
        </div>
      </header>

      <div style={{ height: "1px", background: "#000000ff" }} />

      {/* САЙДБАР (Мобільне меню) */}
      <div className={`sidebar-menu ${isSidebarOpen ? "active" : ""}`}>
        <div style={{ textAlign: "right", marginBottom: "20px" }}>
           <FiX size={28} onClick={closeSidebar} style={{ cursor: "pointer" }} />
        </div>

        <ul style={{ listStyle: "none", padding: 0, fontSize: "18px" }}>
          <li onClick={() => goTo("/")} style={getSidebarItemStyle("/", location.pathname)}>Home</li>
          <li onClick={() => goTo("/contact")} style={getSidebarItemStyle("/contact", location.pathname)}>Contact</li>

          {/* DROPDOWN SKINCARE */}
          <li style={{ marginBottom: "15px" }}>
            <div onClick={() => setIsSkinCareOpen(!isSkinCareOpen)} style={dropdownToggleStyle}>
              <span>SkinCare</span>
              <span style={{ fontSize: "12px" }}>{isSkinCareOpen ? "▲" : "▼"}</span>
            </div>
            {isSkinCareOpen && (
              <ul style={{ listStyle: "none", paddingLeft: "15px", marginTop: "10px", borderLeft: "1px solid #eee" }}>
                <li style={getSubMenuStyle("/skin-care", location.pathname)} onClick={() => goTo("/skin-care")}>All products</li>
                <li style={getSubMenuStyle("/novelty", location.pathname)} onClick={() => goTo("/novelty")}>Novelty</li>
                <li style={getSubMenuStyle("/bestsellers", location.pathname)} onClick={() => goTo("/bestsellers")}>Bestsellers</li>
              </ul>
            )}
          </li>

          {/* DROPDOWN SKIN TYPE */}
          <li style={{ marginBottom: "15px" }}>
            <div onClick={() => setIsSkinTypeOpen(!isSkinTypeOpen)} style={dropdownToggleStyle}>
              <span>Skin Type</span>
              <span style={{ fontSize: "12px" }}>{isSkinTypeOpen ? "▲" : "▼"}</span>
            </div>
            {isSkinTypeOpen && (
              <ul style={{ listStyle: "none", paddingLeft: "15px", marginTop: "10px", borderLeft: "1px solid #eee" }}>
                <li style={getSubMenuStyle("/normal-skin", location.pathname)} onClick={() => goTo("/normal-skin")}>Normal Skin</li>
                <li style={getSubMenuStyle("/dry-skin", location.pathname)} onClick={() => goTo("/dry-skin")}>Dry Skin</li>
                <li style={getSubMenuStyle("/oily-skin", location.pathname)} onClick={() => goTo("/oily-skin")}>Oily Skin</li>
                <li style={getSubMenuStyle("/comby", location.pathname)} onClick={() => goTo("/comby")}>Combination Skin</li>
                <li style={getSubMenuStyle("/sensitive-skin", location.pathname)} onClick={() => goTo("/sensitive-skin")}>Sensitive Skin</li>
                <li style={getSubMenuStyle("/all-skin-types", location.pathname)} onClick={() => goTo("/all-skin-types")}>All Skin Types</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      
      {/* ТЕМНИЙ ФОН ПРИ ВІДКРИТТІ */}
      {isSidebarOpen && (
        <div onClick={closeSidebar} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.3)", zIndex: 1150 }} />
      )}
    </>
  );
};

// СТИЛІ
const dropdownToggleStyle = {
  cursor: "pointer", 
  display: "flex", 
  justifyContent: "space-between", 
  alignItems: "center",
  width: "100%", 
  fontWeight: "400",
  padding: "10px 0"
};

const getSidebarItemStyle = (path, currentPath) => ({
  cursor: "pointer", 
  padding: "10px 0",
  fontWeight: currentPath === path ? "600" : "400",
  color: "#000",
  transition: "0.2s"
});

const getSubMenuStyle = (path, currentPath) => ({
  padding: "8px 0",
  cursor: "pointer",
  fontSize: "16px",
  color: currentPath === path ? "#000" : "#666",
  fontWeight: currentPath === path ? "600" : "400",
  transition: "0.2s"
});

export default Header;