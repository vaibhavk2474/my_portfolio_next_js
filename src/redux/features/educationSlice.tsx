// store/infoSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface educationInfoState {
  id: string;
  degree: string;
  institute: string;
  startDate: string;
  endDate: string;
  place: string;
  marks: string;
}

interface educationState {
  qualificationDataList: educationInfoState[];
}

const initialState: educationState = {
  qualificationDataList: [
    {
      id: `${new Date().getTime()}`,
      degree: "",
      institute: "",
      startDate: "",
      endDate: "",
      place: "",
      marks: "",
    },
  ],
};

const educationSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    // postEducationState(state, action: PayloadAction<educationInfoState>) {
    //   state.qualificationDataList.push(action.payload);
    // },
    postEducationState(state, action: PayloadAction<educationState>) {
      state.qualificationDataList = action.payload.qualificationDataList;
    },
  },
});

export const { postEducationState } = educationSlice.actions;

export default educationSlice.reducer;
