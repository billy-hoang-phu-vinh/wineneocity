export const initialState = {
  cart: [],
  user: null,
  promo: 0.15,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //check duplicate items
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "DELETE_CART":
      //check duplicate items
      return {
        ...state,
        cart: [],
      };
    case "UPDATE_ITEM_CART":
      //check duplicate items
      //   state.cart[action.position].qty += 1;
      let currentQuantity = state.cart[action.position].qty;
      console.log(`quantity truoc khi them `, state.cart[action.position].qty);
      // test
      //   state.cart[action.position].qty += 1;

      //want to update cart
      state.cart[action.position].qty = action.newQty;

      console.log(`quantity sau khi them `, state.cart[action.position].qty);

      return { ...state };
    default:
      return state;
  }
};

export default reducer;
