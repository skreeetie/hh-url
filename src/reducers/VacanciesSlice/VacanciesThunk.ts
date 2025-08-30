import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVacancies = createAsyncThunk(
  "vacancies/fetchVacancies",
  async () => {
    const res = await fetch(
      "https://api.hh.ru/vacancies?industry=7&professional_role=96"
    );
    const data = await res.json();

    return data.items;
  }
);
