import { createSlice } from "@reduxjs/toolkit";

export const laboSlice = createSlice({
  name: "labos",
  initialState: {
    labos: [],
  },
  reducers: {
    getLabo: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.labos = action.payload;
    },
    editlabo: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.labos = state.labos.map((oneLabo) => {
        if (oneLabo.id === payload[1]) {
          return {
            ...oneLabo,
            labos: payload[0],
          };
        }
        return oneLabo;
      });
    },
  },
});
export const { getLabo, editlabo } = laboSlice.actions;

export default laboSlice.reducer;
