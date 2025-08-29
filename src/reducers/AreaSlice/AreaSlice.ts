import { createSlice } from "@reduxjs/toolkit";

interface AreaState {
  areasList: string[];
}

const initialState: AreaState = {
  areasList: [],
};

const areaSlice = createSlice({
  name: "area",
  initialState,
  reducers: {
    setAreas: (state, action) => {
      state.areasList = [...action.payload.list];
    },
  },
});

export const { setAreas } = areaSlice.actions;

export default areaSlice.reducer;
