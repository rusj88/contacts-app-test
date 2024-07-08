import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const groupsSlice = createSlice({
  name: "groups",
  initialState,

  reducers: {
    addGroup: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    fillGroups: (state, action) => {
      state.value = [...action.payload];
    },
    editGroup: (state, action) => {
      const { id, title } = action.payload;
      const group = state.value.find((g) => g.id === id);
      if (group) {
        group.title = title;
      }
    },
  },
});

export const { addGroup, fillGroups, editGroup } = groupsSlice.actions;
export default groupsSlice.reducer;
