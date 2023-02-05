import { createSlice } from "@reduxjs/toolkit";

export const laboSlice = createSlice({
  name: "labos",
  initialState: {
    labos: [
      {
        id: 1,
        namelabo: "test",
        adresselabo: "test",
        villelabo: "test",
        tellabo: "test",
      },
    ],
  },
  reducers: {
    getLabo: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.labos = action.payload;
    },
    editlabo: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.labos = state.labos.map((oneLabo) => {
        if (oneLabo.id === action.payload[1]) {
          return {
            ...oneLabo,
            labos: action.payload[0],
          };
        }
        return oneLabo;
      });
    },
  },
});
export const { getLabo, editlabo } = laboSlice.actions;

export default laboSlice.reducer;
