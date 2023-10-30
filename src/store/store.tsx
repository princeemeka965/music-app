import { configureStore } from "@reduxjs/toolkit";
import artisteDataSlice from "@/reducers/artisteDataSlice";

const store = configureStore({
  reducer: {
    artisteData: artisteDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
