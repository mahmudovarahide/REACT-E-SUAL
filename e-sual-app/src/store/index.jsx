import { configureStore } from '@reduxjs/toolkit'; 
import AuthSlice from './slices/auth'

const rootReducer = {
    auth: AuthSlice,
};

export default configureStore({ reducer: rootReducer });
