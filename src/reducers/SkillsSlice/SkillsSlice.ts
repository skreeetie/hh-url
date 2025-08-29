import { createSlice } from "@reduxjs/toolkit";
import type { Skill } from "../../env/skills.env";

interface SkillsState {
  skillsList: Skill[];
}

const initialState: SkillsState = {
  skillsList: [],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addToSkills: (state, action) => {
      state.skillsList = [...state.skillsList, { ...action.payload }];
    },
    removeFromSkills: (state, action) => {
      state.skillsList = state.skillsList.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToSkills, removeFromSkills } = skillsSlice.actions;

export default skillsSlice.reducer;
