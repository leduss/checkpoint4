import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import valueReducer from "./ValueSlice";
import doctorReducer from "./doctorSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    value: valueReducer,
    doctor: doctorReducer,
  },
});

export default store;
