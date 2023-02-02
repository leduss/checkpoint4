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
    editDoctor: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.doctor = state.doctor.map((oneDoctor) => {
        if (oneDoctor.id === payload[1]) {
          return {
            ...oneDoctor,
            doctors: payload[0],
          };
        }
        return oneDoctor;
      });
    },
  },
});
export const { getDoctor, editDoctor } = doctorSlice.actions;

export default doctorSlice.reducer;
