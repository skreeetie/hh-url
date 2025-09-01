import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVacancies = createAsyncThunk(
  "vacancies/fetchVacancies",
  async (query: string) => {
    const res = await fetch(query);
    const data = await res.json();

    return data.items;
  }
);
