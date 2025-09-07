import { createSlice } from "@reduxjs/toolkit";
import type { Skill } from "../../env/skills.env";
import { v4 as uuidv4 } from "uuid";

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
    setSkills: (state, action) => {
      if (action.payload.list[0].length > 0) {
        state.skillsList = action.payload.list.map((item: string) => {
          return {
            id: uuidv4(),
            name: item,
          };
        });
      } else {
        state.skillsList = [];
      }
    },
  },
});

export const { setSkills } = skillsSlice.actions;

export default skillsSlice.reducer;
