import { createSlice } from "@reduxjs/toolkit";

export const IdealValueSlice = createSlice({
  name: "idealValues",
  initialState: {
    idealValues: [],
  },
  reducers: {
    getValue: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.idealValues = action.payload;
    },
    editValue: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.idealValues = state.idealValues.map((oneValue) => {
        if (oneValue.id === action.payload.id) {
          return {
            ...oneValue,
            min: action.payload.min,
            max: action.payload.max,
          };
        }
        return oneValue;
      });
    },
  },
});

export const { getValue, editValue } = IdealValueSlice.actions;
export default IdealValueSlice.reducer;
