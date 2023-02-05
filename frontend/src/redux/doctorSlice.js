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
    editDoctor: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.doctors = state.doctors.map((doctor) => {
        if (doctor.id === state.payload.id) {
          return {
            ...doctor,
            namedoctor: state.payload,
            adressedoctor: state.payload,
            teldoctor: state.payload.teldoctor,
            villedoctor: state.payload,
          };
        }
        return doctor;
      });
    },
  },
});
export const { getDoctor, editDoctor } = doctorSlice.actions;

export default doctorSlice.reducer;
