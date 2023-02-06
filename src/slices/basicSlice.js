import { createSlice } from "@reduxjs/toolkit";

const verifyToken = () => {
  const token = sessionStorage.getItem('token');
  return token ? true : false;
}

const initialState = {
  isAuth: verifyToken(),
};

const basicSlice = createSlice({
  name: "dummieSlice",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      // Ya no me preocupo por la inmutabilidad de los datos
      state.isAuth = action.payload;
    },
    activateAuth: (state, action) => {
      console.log(action.payload);
      sessionStorage.setItem('token', action.payload);
      state.isAuth = verifyToken();
    },
  },
});

export const {
  setIsAuth,
  activateAuth,
} = basicSlice.actions;

export default basicSlice.reducer;