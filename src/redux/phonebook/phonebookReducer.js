// import { combineReducers } from 'redux';
// import Types from './phonebookActionTypes';

// const contactsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case Types.FETCH_CONTACTS:
//       return payload;
//     case Types.ADD_CONTACT:
//       return [...state, payload];
//     case Types.DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case Types.FILTER_CONTACTS:
//       return payload;
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// With redux-toolkit
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as Actions from './phonebookActions';

const contactsReducer = createReducer([], {
  [Actions.fetchContacts]: (state, action) => action.payload,
  [Actions.addContact]: (state, action) => [...state, action.payload],
  [Actions.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filterReducer = createReducer('', {
  [Actions.filterContacts]: (state, action) => action.payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
