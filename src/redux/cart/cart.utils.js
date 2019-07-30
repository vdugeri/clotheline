export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exists = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (exists) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  const exists = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (exists) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return [...cartItems];
};
