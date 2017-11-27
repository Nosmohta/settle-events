import _ from "lodash";

const initialState = require("../data/initialInventoryState.json");

const inventory = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_VARIANT_SETTLE_COUNT":
      const { productId, variantId, propertyName, newValue } = action.payload;
      const productIndex = _.findIndex(state.eventProducts, { id: productId });
      const updatedEventProducts = state.eventProducts.map((product, i) => {
        if (i !== productIndex) {
          return product;
        } else {
          const variantIndex = _.findIndex(product.variants, { id: variantId });
          const updatedVariants = product.variants.map((variant, i) => {
            if (i !== variantIndex) {
              return variant;
            } else {
              return {
                ...variant,
                ...{ [propertyName]: Number(newValue) }
              };
            }
          });

          return {
            ...product,
            ...{ variants: updatedVariants }
          };
        }
      });

      return {
        ...state,
        ...{ eventProducts: updatedEventProducts }
      };
    case "TOGGLE_SETTLED_STATE":
      return {
        ...state,
        ...{ settled: !state.settled }
      };
    case "SAVE_PRODUCT_UPDATE":
      const { propertyType, value } = action.payload;
      const saveProductIndex = _.findIndex(state.eventProducts, {
        id: action.productId
      });
      const saveEventProducts = state.eventProducts.map((product, i) => {
        if (i !== saveProductIndex) {
          return product;
        } else {
          return Object.assign({}, product, { [propertyType]: value });
        }
      });

      return {
        ...state,
        ...{ eventProducts: saveEventProducts }
      };
    default:
      return state;
  }
};

export default inventory;
