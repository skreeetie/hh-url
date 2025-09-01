import { Pagination } from "@mantine/core";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { setActivePage } from "../../reducers/PageSlice/PageSlice";

export const PaginationFooter = () => {
  const vacanciesList = useTypedSelector(
    (state) => state.vacancies.vacanciesList
  );
  const dispatch = useTypedDispatch();
  const activePage = useTypedSelector((state) => state.page.activePage);
  return (
    <footer>
      <Pagination
        value={activePage}
        onChange={(value) => {
          dispatch(setActivePage({ value }));
        }}
        total={vacanciesList.length}
        radius="xs"
        withEdges
      />
    </footer>
  );
};
