import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export const useSearch = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchText(() => {
      return searchParams.get("search") || "";
    });
  }, [searchParams]);

  return { searchText, searchParams, setSearchParams };
};
