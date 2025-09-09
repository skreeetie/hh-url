import { useEffect, useState } from "react";
import { useTypedSelector } from "../redux/hooks/redux";
import { useSkills } from "./useSkills";
import { useAreas } from "./useAreas";
import { useSearch } from "./useSearch";

export const useUrl = () => {
  const [url, setUrl] = useState<string>("");
  const activePage = useTypedSelector((state) => state.page.activePage);
  const { searchText } = useSearch();
  const { skillsQuery } = useSkills();
  const { areasQuery } = useAreas();
  useEffect(() => {
    setUrl(`page=${activePage}&text=${searchText}${skillsQuery}${areasQuery}`);
  }, [activePage, searchText, skillsQuery, areasQuery]);

  return { url };
};
