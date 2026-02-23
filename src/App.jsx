import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import ChatBot from './components/ChatBot'; // Імпортуємо нашого бота
import Home from "./pages/Home";
import SkinCarePage from "./pages/SkinCarePage";
import NoveltyPage from "./pages/NoveltyPage";
import BestsellersPage from "./pages/BestsellersPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NewPage from "./pages/NewPage";
import IconsPage from "./pages/IconsPage";
import MyProfile from "./pages/MyProfile"; 
import NormalSkinPage from "./pages/NormalSkinPage";
import DrySkinPage from "./pages/DrySkinPage";
import OilySkinPage from "./pages/OilySkinPage";
import CombinationSkinPage from "./pages/CombinationSkinPage";
import SensitiveSkinPage from "./pages/SensitiveSkinPage";
import AllSkinTypesPage from "./pages/AllSkinTypesPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiePolicy from "./pages/CookiePolicy";
import OwnerProfile from "./pages/OwnerProfile";
import LoginAdmin from "./pages/LoginAdmin";
import AccountPage from "./pages/AccountPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <CartProvider>
      <Router>
        {/* ScrollToTop має бути тут, щоб працювати при кожному переході */}
        <ScrollToTop /> 
        
        <Cart />
        
        {/* Бот буде поверх усіх сторінок */}
        <ChatBot />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skin-care" element={<SkinCarePage />} />
          <Route path="/novelty" element={<NoveltyPage />} />
          <Route path="/bestsellers" element={<BestsellersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/new-page" element={<NewPage />} />
          <Route path="/icons-page" element={<IconsPage />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/normal-skin" element={<NormalSkinPage />} />
          <Route path="/dry-skin" element={<DrySkinPage />} />
          <Route path="/oily-skin" element={<OilySkinPage />} />
          <Route path="/comby" element={<CombinationSkinPage />} />
          <Route path="/sensitive-skin" element={<SensitiveSkinPage />} />
          <Route path="/all-skin-types" element={<AllSkinTypesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/owner-dashboard" element={<OwnerProfile />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/profile" element={<AccountPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;