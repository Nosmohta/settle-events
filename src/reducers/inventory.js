const initialState = require('../data/initialInventoryState.json');

const inventory = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        token: null,
        loggedIn: false
      };
    default:
      return state;
  }
};

export default inventory;
