import { createSlice } from '@reduxjs/toolkit';  

const initialState = {
    isAuthenticated: false, // request gedib yoxsa yox
    isInitialized: false, // istifadeci varmi ?
    user: null, // istifaceci datalari
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LogIn(state, action){
        state.isAuthenticated = action.payload.isAuthenticated
        state.isInitialized = action.payload.isInitialized
        state.user = action.payload.user
    },
    logOut(state, action){
      state.isAuthenticated = true
      state.isInitialized = false
      state.user = null
    },
    authInit(state,action){
      state.isAuthenticated = action.payload.isAuthenticated
    } 
  },
});

export const { LogIn, logOut, authInit} = authSlice.actions;
export default authSlice.reducer;
