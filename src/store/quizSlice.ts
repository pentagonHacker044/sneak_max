import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  quizValue: string;
};

const initialState: TInitialState = {
  quizValue: "section_one",
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    changeQuizValue(state, action) {
      state.quizValue = action.payload;
    },
  },
});

export const { changeQuizValue } = quizSlice.actions

export default quizSlice.reducer;
