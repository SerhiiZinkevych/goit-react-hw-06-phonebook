// import Types from './phonebookActionTypes';

// export const fetchContacts = (contacts) => ({
//   type: Types.FETCH_CONTACTS,
//   payload: contacts,
// });

// export const addContact = (contact) => ({
//   type: Types.ADD_CONTACT,
//   payload: contact,
// });

// export const deleteContact = (contact) => ({
//   type: Types.DELETE_CONTACT,
//   payload: contact,
// });

// export const filterContacts = (query) => ({
//   type: Types.FILTER_CONTACTS,
//   payload: query,
// });

// With redux-toolkit
import { createAction } from '@reduxjs/toolkit';
import Types from './phonebookActionTypes';

export const fetchContacts = createAction(Types.FETCH_CONTACTS);
export const addContact = createAction(Types.ADD_CONTACT);
export const deleteContact = createAction(Types.DELETE_CONTACT);
export const filterContacts = createAction(Types.FILTER_CONTACTS);
