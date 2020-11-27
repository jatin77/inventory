import { productActionTypes } from "./product.actionTypes";

export const addProduct = (data) => {
  return {
    type: productActionTypes.ADD_PRODUCT,
    payload: data,
  };
};

export const removeProduct = (data) => {
  return {
    type: productActionTypes.REMOVE_PRODUCT,
    payload: data,
  };
};

export const updateProduct = (data) => {
  return {
    type: productActionTypes.UPDATE_PRODUCT,
    payload: data,
  };
};
