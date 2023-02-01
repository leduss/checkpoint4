import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  log: "",
  msg: "",
  token: "",
  loading: false,
  error: "",
};

export const signIn = createAsyncThunk("signing", async (data) => {
  const response = await fetch("http://localhost:8000/api/users/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // eslint-disable-next-line no-return-await
  return await response.json();
});
export const login = createAsyncThunk("login", async (data) => {
  const response = await fetch("http://localhost:8000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // eslint-disable-next-line no-return-await
  return await response.json();
});

export const authSlice = createSlice({
  extraReducers: {
    [login.pending]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload: { error, msg, token, user } }) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
      if (error) {
        // eslint-disable-next-line no-param-reassign
        state.error = error;
      } else {
        // eslint-disable-next-line no-param-reassign
        state.msg = msg;
        // eslint-disable-next-line no-param-reassign
        state.token = token;
        // eslint-disable-next-line no-param-reassign
        state.log = user;
        localStorage.setItem("msg", msg);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      }
    },
    [login.rejected]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
    },

    [signIn.pending]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = true;
    },
    [signIn.fulfilled]: (state, { payload: { error, msg } }) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
      if (error) {
        // eslint-disable-next-line no-param-reassign
        state.error = error;
      } else {
        // eslint-disable-next-line no-param-reassign
        state.msg = msg;
      }
    },
    [signIn.rejected]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
    },
  },
  initialState,
  name: "log",
  reducers: {
    addToken: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.token = localStorage.getItem("token");
    },
    addUser: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.user = localStorage.getItem("user");
    },
    logout: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.token = null;
      localStorage.clear();
    },
  },
});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;
