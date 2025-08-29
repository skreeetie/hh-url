import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "../reducers/SkillsSlice/SkillsSlice";
import areaReducer from "../reducers/AreaSlice/AreaSlice";

export const store = configureStore({
  reducer: {
    skills: skillsReducer,
    area: areaReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
