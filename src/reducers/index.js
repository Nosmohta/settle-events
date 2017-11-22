import { combineReducers } from 'redux';

import inventory from './inventory';

const atVenueReducers = combineReducers({
  inventory
});

export default atVenueReducers;
