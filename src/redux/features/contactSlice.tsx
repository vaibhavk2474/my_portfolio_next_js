// store/infoSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface contactState {
  email: string;
  mobileNo: string;
  address: string;
}

const initialState: contactState = {
  email: "",
  mobileNo: "",
  address: "",
};

const contactSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    postContactState(state, action: PayloadAction<contactState>) {
      state.email = action.payload.email;
      state.mobileNo = action.payload.mobileNo;
      state.address = action.payload.address;
    },
  },
});

export const { postContactState } = contactSlice.actions;

export default contactSlice.reducer;
