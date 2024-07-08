import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const cleanUpNumbers = (numbers) => {
  const cleanedNumbers = numbers.filter((number) => number.trim() !== "");
  return cleanedNumbers.length > 0 ? cleanedNumbers : [];
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    addContact: (state, action) => {
      const contact = {
        ...action.payload,
        number: cleanUpNumbers(action.payload.number),
      };
      state.value = [...state.value, contact];
    },
    fillContacts: (state, action) => {
      state.value = action.payload.map((contact) => ({
        ...contact,
        number: cleanUpNumbers(contact.number),
      }));
    },
    editContact: (state, action) => {
      const { id, name, number } = action.payload;
      const contactIndex = state.value.findIndex((c) => c.id === id);
      if (contactIndex !== -1) {
        state.value[contactIndex].name = name;
        state.value[contactIndex].number = cleanUpNumbers(number);
      }
    },
  },
});

export const { addContact, fillContacts, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;
