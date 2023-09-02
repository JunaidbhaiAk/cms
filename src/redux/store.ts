import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contactSlice'

export const store = configureStore({
  reducer: contactsReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;