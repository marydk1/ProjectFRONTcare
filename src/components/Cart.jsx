import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, isCartOpen, closeCart, updateQuantity, removeItemFromCart, totalPrice } = useCart();

  // Функція для імітації переходу на оплату
  const handleCheckout = () => {
    // Це посилання веде на реальну тестову сторінку Stripe. 
    // Ви можете створити власне в Stripe Dashboard -> Payment Links
    const stripeTestLink = "https://buy.stripe.com/test_4gM28j0Xsfms1Wx9ePfMA00"; 
    
    // Перенаправляємо користувача
    window.location.href = stripeTestLink;
  };

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay" onClick={closeCart}>
      <div className="cart-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Шапка кошика */}
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={closeCart}>&times;</button>
        </div>

        {cartItems.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: '50px' }}>Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.description} className="cart-item-img" />
                  
                  <div className="cart-item-details">
                    <h4>{item.description}</h4>
                    <p>₴{item.price}</p>
                    
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>

                  <button className="remove-item" onClick={() => removeItemFromCart(item.id)}>
                    <span className="remove-item-icon">🗑</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="total">
                <span>Total:</span>
                <span>₴{totalPrice},00</span>
              </div>
              {/* Додано обробник кліку onClick */}
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;