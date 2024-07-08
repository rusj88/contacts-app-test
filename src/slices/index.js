import { configureStore } from "@reduxjs/toolkit";
import groupsReducer from "./groupsSlice.js";
import contactsReducer from "./contactsSlice.js";

export default configureStore({
  reducer: {
    groups: groupsReducer,
    contacts: contactsReducer,
  },
});
