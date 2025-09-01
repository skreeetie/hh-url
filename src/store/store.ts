import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "../reducers/SkillsSlice/SkillsSlice";
import areaReducer from "../reducers/AreaSlice/AreaSlice";
import vacanciesReducer from "../reducers/VacanciesSlice/VacanciesSlice";
import pageReducer from "../reducers/PageSlice/PageSlice";

export const store = configureStore({
  reducer: {
    skills: skillsReducer,
    area: areaReducer,
    vacancies: vacanciesReducer,
    page: pageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
