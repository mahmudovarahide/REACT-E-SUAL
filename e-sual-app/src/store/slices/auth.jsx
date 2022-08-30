import { createSlice } from '@reduxjs/toolkit';  

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
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
    RegisterAuth(state, action){
      state.isAuthenticated = action.payload.isAuthenticated
      state.isInitialized = action.payload.isInitialized
      state.user = action.payload.user
  },
    authInit(state,action){
      state.isAuthenticated = action.payload.isAuthenticated
    } 
  },
});

export const { LogIn, logOut,RegisterAuth,authInit} = authSlice.actions;
export default authSlice.reducer;
