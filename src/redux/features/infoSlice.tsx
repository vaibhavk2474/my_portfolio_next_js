// store/infoSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InfoState {
  fullName: string;
  designation: string;
  description: string;
  image: File | null;
}

const initialState: InfoState = {
  fullName: "",
  description: "",
  designation: "",
  image: null,
};

const infoSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    postInfoState(state, action: PayloadAction<InfoState>) {
      state.fullName = action.payload.fullName;
      state.designation = action.payload.designation;
      state.description = action.payload.description;
      state.image = action.payload.image;
    },
  },
});

export const { postInfoState } = infoSlice.actions;

export default infoSlice.reducer;
