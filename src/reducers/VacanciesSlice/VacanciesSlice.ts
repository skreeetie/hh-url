import { createSlice } from "@reduxjs/toolkit";
import { fetchVacancies } from "./VacanciesThunk";
import type { Vacancy } from "../../env/vacancy.env";

interface VacanciesState {
  vacanciesList: Vacancy[];
  isLoading: boolean;
}

const initialState: VacanciesState = {
  vacanciesList: [],
  isLoading: false,
};

const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVacancies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vacanciesList = action.payload;
      });
  },
});

export default vacanciesSlice.reducer;
