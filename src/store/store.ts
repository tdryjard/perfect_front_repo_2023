import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "@/services/user.services";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    // ...autres reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
