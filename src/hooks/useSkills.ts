import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export const useSkills = () => {
  const [skillsQuery, setSkillsQuery] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams({
    skills: "TypeScript React Redux",
  });
  const [skills, setSkills] = useState<string[]>([]);
  useEffect(() => {
    setSkillsQuery(` ${searchParams.get("skills")}`);
    setSkills(() => {
      return searchParams.get("skills")?.split(" ") || [];
    });
  }, [searchParams]);

  return { skillsQuery, searchParams, setSearchParams, skills };
};
