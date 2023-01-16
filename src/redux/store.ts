import {combineReducers, configureStore} from "@reduxjs/toolkit";
import playerSlice from "./features/playerSlice";
import {shazamCoreApi} from "./services/shazamCore";

const RootReducer = combineReducers({
  player: playerSlice,
  [shazamCoreApi.reducerPath]: shazamCoreApi.reducer
});

export const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shazamCoreApi.middleware)
});

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch;