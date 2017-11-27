export const updateVariantSettleCount = payload => {
  return {
    type: "UPDATE_VARIANT_SETTLE_COUNT",
    payload
  };
};

export const toggleSettledState = () => {
  return {
    type: "TOGGLE_SETTLED_STATE"
  };
};

export const saveProductUpdate = (productId, payload) => {
  return {
    type: "SAVE_PRODUCT_UPDATE",
    payload,
    productId
  };
};
