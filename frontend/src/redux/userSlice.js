import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUser: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.users = action.payload;
    },
    editUser: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.user = state.user.map((oneUser) => {
        if (oneUser.id === payload[1]) {
          return {
            ...oneUser,
            users: payload[0],
          };
        }
        return oneUser;
      });
    },
  },
});

export const { getUser, editUser } = userSlice.actions;
export default userSlice.reducer;
