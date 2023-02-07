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
    removeAuth: (state, action) => {
      sessionStorage.removeItem('token');
      state.isAuth = false;
    }
  },
});

export const {
  setIsAuth,
  activateAuth,
  removeAuth
} = basicSlice.actions;

export default basicSlice.reducer;