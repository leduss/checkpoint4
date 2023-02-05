import { createSlice } from "@reduxjs/toolkit";

export const IdealValueSlice = createSlice({
  name: "idealValues",
  initialState: {
    idealValues: [],
  },
  reducers: {
    getValue: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.idealValues = payload;
    },
    editValue: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.idealValues.map((oneValue) => {
        if (oneValue.id === action.payload[1]) {
          return {
            ...oneValue,
            idealValues: action.payload[0],
          };
        }
        return oneValue;
      });
    },
  },
});

export const { getValue, editValue } = IdealValueSlice.actions;
export default IdealValueSlice.reducer;
