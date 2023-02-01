import { createSlice } from "@reduxjs/toolkit";

export const doctorSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [],
  },
  reducers: {
    getDoctor: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.doctors = action.payload;
    },
  },
});

export const { getDoctor } = doctorSlice.actions;

export default doctorSlice.reducer;
