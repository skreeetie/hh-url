import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export const useSkillsQuery = () => {
  const [skillsQuery, setSkillsQuery] = useState<string>("");
  const [searchParams] = useSearchParams({ skills: "TypeScript React Redux" });
  useEffect(() => {
    setSkillsQuery(` ${searchParams.get("skills")}`);
  }, [searchParams]);

  return skillsQuery;
};
