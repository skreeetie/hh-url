import { MultiSelect } from "@mantine/core";
import Map from "../../assets/area.svg?react";
import style from "./style.module.scss";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks/redux";
import { setAreas } from "../../redux/reducers/AreaSlice/AreaSlice";
import { useEffect } from "react";
import { useAreas } from "../../hooks/useAreas";

export const Area = () => {
  const dispatch = useTypedDispatch();
  const areasList = useTypedSelector((state) => state.area.areasList);
  const { setSearchParams, areas } = useAreas();
  useEffect(() => {
    dispatch(setAreas({ list: areas }));
  }, [dispatch, areas]);
  return (
    <div className={style.area}>
      <MultiSelect
        clearable
        checkIconPosition="right"
        leftSectionPointerEvents="none"
        leftSection={<Map width={15} height={15} />}
        placeholder={areasList.length > 0 ? "" : "Все города"}
        data={["Все города", "Москва", "Санкт-Петербург"]}
        value={areasList}
        onChange={(e) => {
          e.forEach((area) => {
            setSearchParams((searchParams) => {
              searchParams.append("area", area);
              return searchParams;
            });
          });
        }}
        classNames={{ input: style.input }}
      />
    </div>
  );
};
