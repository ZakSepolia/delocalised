import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { updateVersion } from "./global/actions";
import application from "./application/reducer";
import multicall from "./multicall/reducer";
import transactions from "./transactions/reducer";
import wallets from "./wallets/reducer";

const store = configureStore({
  reducer: {
    application,
    multicall,
    transactions,
    wallets,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
  ],
});

store.dispatch(updateVersion());

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
