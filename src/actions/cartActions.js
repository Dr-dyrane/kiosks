import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import { baseUrl } from "../proxy";

export const addToCart = (_id, qty) => async (dispatch, getState) => {
  const url = baseUrl + `api/products/${_id}`;
  const { data } = await axios.get(url);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty:qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) =>  (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload : id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
