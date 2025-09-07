import { Button, TextInput } from "@mantine/core";
import Search from "../../assets/search.svg?react";
import style from "./style.module.scss";
import { Skills } from "../../components/Skills/Skills";
import { Area } from "../../components/Area/Area";
import { Vacancy } from "../../components/Vacancy/Vacancy";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { useEffect, useState } from "react";
import { fetchVacancies } from "../../reducers/VacanciesSlice/VacanciesThunk";
import { PaginationFooter } from "../../components/PaginationFooter/PaginationFooter";
import { useSearchParams } from "react-router";

export const VacanciesList = () => {
  const dispatch = useTypedDispatch();
  const vacanciesList = useTypedSelector(
    (state) => state.vacancies.vacanciesList
  );
  const activePage = useTypedSelector((state) => state.page.activePage);
  const [searchText, setSearchText] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const areasQuery = useTypedSelector((state) => state.area.areasQuery);
  const [searchParams] = useSearchParams({ skills: "TypeScript React Redux" });
  useEffect(() => {
    const skillsQuery = ` ${searchParams.get("skills")}`;
    dispatch(
      fetchVacancies(
        `https://api.hh.ru/vacancies?industry=7&professional_role=96&per_page=10&page=${activePage}&text=${searchText}${skillsQuery}${areasQuery}`
      )
    );
  }, [dispatch, activePage, searchText, areasQuery, searchParams]);
  return (
    <section className={style.section}>
      <div className={style.top}>
        <div>
          <h2 className={style.title}>Список вакансий</h2>
          <p className={style.secondary}>по профессии Frontend-разработчик</p>
        </div>
        <div className={style.inputs}>
          <TextInput
            value={searchValue}
            size="md"
            radius="md"
            placeholder="Должность или название компании"
            leftSection={<Search width={14} height={14} />}
            classNames={{ input: style.input, wrapper: style.search }}
            onChange={({ target: { value } }) => {
              setSearchValue(value);
            }}
          />
          <Button
            classNames={{ label: style.label }}
            size="md"
            variant="filled"
            color="primary.4"
            onClick={() => {
              setSearchText(searchValue);
            }}
          >
            Найти
          </Button>
        </div>
      </div>
      <div className={style.divider}></div>
      <div className={style.wrapper}>
        <div>
          <Skills />
          <Area />
        </div>
        <div className={style.list}>
          {vacanciesList.map((item) => {
            return (
              <Vacancy
                key={item.id}
                name={item.name}
                exp_id={item.experience.id}
                alternate={item.alternate_url}
                employer={item.employer.name}
                salary={item.salary}
                place={item.area.name}
                work_format={item.work_format}
                id={item.id}
              />
            );
          })}
          <PaginationFooter />
        </div>
      </div>
    </section>
  );
};
