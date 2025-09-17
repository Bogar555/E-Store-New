import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import userReducer from "./auth/userSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
