import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";
import { baseUrl } from "../proxy";

export const addToCart = (_id, qty) => async (dispatch, getState) => {
  const url = baseUrl + `api/products/${_id}`;
  const { data } = await axios.get(url);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
};
