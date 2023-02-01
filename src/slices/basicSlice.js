import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const basicSlice = createSlice({
  name: "dummieSlice",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      // Ya no me preocupo por la inmutabilidad de los datos
      state.isAuth = action.payload;
    },
  },
});

export const {
  setIsAuth
} = basicSlice.actions;

export default basicSlice.reducer;