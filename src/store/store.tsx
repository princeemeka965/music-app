import { configureStore } from "@reduxjs/toolkit";
import artisteDataSlice from "@/reducers/artisteDataSlice";
import storage from "./storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import userDataSlice from "@/reducers/userDataSlice";

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedArtisteDataReducer = persistReducer(
  persistConfig,
  artisteDataSlice
);

const persistedUserDataReducer = persistReducer(persistConfig, userDataSlice);

export const store = configureStore({
  reducer: {
    artisteData: persistedArtisteDataReducer,
    userData: persistedUserDataReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
