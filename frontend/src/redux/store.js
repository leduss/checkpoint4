import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import valueReducer from "./ValueSlice";
import doctorReducer from "./doctorSlice";
import laboReducer from "./laboSlice";
import IdealValueReducer from "./IdealValueSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    value: valueReducer,
    doctor: doctorReducer,
    labo: laboReducer,
    idealValue: IdealValueReducer,
  },
});

export default store;
