import { Pagination } from "@mantine/core";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { setActivePage } from "../../reducers/PageSlice/PageSlice";
import style from "./style.module.scss";

export const PaginationFooter = () => {
  const vacanciesList = useTypedSelector(
    (state) => state.vacancies.vacanciesList
  );
  const dispatch = useTypedDispatch();
  const activePage = useTypedSelector((state) => state.page.activePage);
  return (
    <footer className={style.footer}>
      <Pagination
        value={activePage}
        onChange={(value) => {
          dispatch(setActivePage({ value }));
        }}
        total={vacanciesList.length}
        radius="xs"
        withEdges
        color="pre-light.9"
        classNames={{ control: style.items, root: style.active }}
      />
    </footer>
  );
};
