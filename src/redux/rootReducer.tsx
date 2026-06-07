// store/rootReducer.ts

import { combineReducers } from "@reduxjs/toolkit";
import infoReducer from "./features/infoSlice";
import contactReducer from "./features/contactSlice";
import educationReducer from "./features/educationSlice";

const rootReducer = combineReducers({
  infoReducer,
  contactReducer,
  educationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
