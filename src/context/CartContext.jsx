import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Завантажуємо початковий стан з localStorage, якщо він там є
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- ЕФЕКТ СИНХРОНІЗАЦІЇ ТА ВИДАЛЕННЯ ---
  useEffect(() => {
    const deletedStaticIds = JSON.parse(localStorage.getItem("deletedStaticIds")) || [];
    const ownerProducts = JSON.parse(localStorage.getItem("ownerProducts")) || [];

    // Фільтруємо кошик: залишаємо лише ті товари, які існують і не видалені
    setCartItems((currentItems) => {
      const filtered = currentItems.filter((item) => {
        // Отримуємо чистий ID (наприклад, з "4-250ml" отримуємо 4)
        const cleanId = String(item.id).split('-')[0];
        const isNumeric = !isNaN(cleanId) && !isNaN(parseFloat(cleanId));

        if (isNumeric) {
          // Якщо це статичний товар, перевіряємо, чи він не в списку видалених
          return !deletedStaticIds.includes(Number(cleanId));
        } else {
          // Якщо це товар, доданий власником вручну, перевіряємо, чи він ще є в базі
          return ownerProducts.some(p => String(p.id) === String(item.id));
        }
      });

      // Якщо після фільтрації кількість товарів змінилася — оновлюємо localStorage
      if (filtered.length !== currentItems.length) {
        localStorage.setItem("cart", JSON.stringify(filtered));
      }
      return filtered;
    });
  }, []);

  // Зберігаємо кошик у localStorage при кожній зміні cartItems
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Додавання товару до кошика
  const addItemToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find(item => String(item.id) === String(product.id));

      if (existingItem) {
        return prev.map(item =>
          String(item.id) === String(product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // Оновлення кількості (+1 або -1)
  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map(item =>
        String(item.id) === String(id)
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Видалення товару вручну
  const removeItemFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => String(item.id) !== String(id)));
  };

  // Керування кошиком
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeCart = () => setIsCartOpen(false);

  // Розрахунок загальної вартості
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addItemToCart, 
      removeItemFromCart, 
      updateQuantity, 
      isCartOpen, 
      toggleCart, 
      closeCart, 
      totalPrice,
      setCartItems 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);