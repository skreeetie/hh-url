import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";

export const useAreas = () => {
  const [areasQuery, setAreasQuery] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [areas, setAreas] = useState<string[]>([]);
  useEffect(() => {
    setAreasQuery(() => {
      return `${searchParams
        .getAll("area")
        .map((item) => {
          switch (item) {
            case "Москва":
              return "&area=1";
            case "Санкт-Петербург":
              return "&area=2";
            default:
              return "";
          }
        })
        .join("")}`;
    });
    setAreas(() => {
      return searchParams.getAll("area");
    });
  }, [searchParams]);

  return { setSearchParams, areasQuery, areas };
};
