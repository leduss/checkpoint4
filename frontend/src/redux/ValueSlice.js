import { createSlice } from "@reduxjs/toolkit";

export const valueSlice = createSlice({
  name: "values",
  initialState: {
    values: [],
  },
  reducers: {
    getValue: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.values = action.payload;
    },
    addValue: (state, { payload }) => {
      state.values.push(payload);
    },
    deleteValue: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.values = state.values.filter((value) => value.id !== payload);
    },
  },
});

export const { getValue, addValue, deleteValue } = valueSlice.actions;
export default valueSlice.reducer;
