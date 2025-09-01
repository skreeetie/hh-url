import { Button, TextInput } from "@mantine/core";
import Search from "../../assets/search.svg?react";
import style from "./style.module.scss";
import { Skills } from "../../components/Skills/Skills";
import { Area } from "../../components/Area/Area";
import { Vacancy } from "../../components/Vacancy/Vacancy";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { fetchVacancies } from "../../reducers/VacanciesSlice/VacanciesThunk";
import { PaginationFooter } from "../../components/PaginationFooter/PaginationFooter";

export const VacanciesList = () => {
  const dispatch = useTypedDispatch();
  const vacanciesList = useTypedSelector(
    (state) => state.vacancies.vacanciesList
  );
  const activePage = useTypedSelector((state) => state.page.activePage);
  useEffect(() => {
    dispatch(
      fetchVacancies(
        `https://api.hh.ru/vacancies?industry=7&professional_role=96&per_page=10&page=${activePage}`
      )
    );
  }, [dispatch, activePage]);
  return (
    <section className={style.section}>
      <div className={style.top}>
        <div>
          <h2 className={style.title}>Список вакансий</h2>
          <p className={style.secondary}>по профессии Frontend-разработчик</p>
        </div>
        <div className={style.inputs}>
          <TextInput
            size="md"
            radius="md"
            placeholder="Должность или название компании"
            leftSection={<Search width={14} height={14} />}
            classNames={{ input: style.input, wrapper: style.search }}
          />
          <Button
            classNames={{ label: style.label }}
            size="md"
            variant="filled"
            color="primary.4"
          >
            Найти
          </Button>
        </div>
      </div>
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
              />
            );
          })}
        </div>
      </div>
      <PaginationFooter />
    </section>
  );
};
