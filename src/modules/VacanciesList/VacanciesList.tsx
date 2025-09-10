import { Button, TextInput } from "@mantine/core";
import Search from "../../assets/search.svg?react";
import style from "./style.module.scss";
import { Skills } from "../../components/Skills/Skills";
import { Area } from "../../components/Area/Area";
import { Vacancy } from "../../components/Vacancy/Vacancy";
import { useState } from "react";
import { PaginationFooter } from "../../components/PaginationFooter/PaginationFooter";
import { useUrl } from "../../hooks/useUrl";
import { useGetFilteredVacanciesQuery } from "../../redux/reducers/VacanciesApi/VacanciesApi";
import { useSearch } from "../../hooks/useSearch";

export const VacanciesList = () => {
  const { url } = useUrl();
  const { searchParams, setSearchParams } = useSearch();
  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get("search") || ""
  );
  const { data: vacanciesList } = useGetFilteredVacanciesQuery(url);
  return (
    <section className={style.section}>
      <div className={style.top}>
        <div>
          <h2 className={style.title}>Список вакансий</h2>
          <p className={style.secondary}>по профессии Frontend-разработчик</p>
        </div>
        <div className={style.inputs}>
          <TextInput
            onKeyDown={({ key }) => {
              if (key === "Enter") {
                setSearchParams((searchParams) => {
                  searchParams.set("search", searchValue);
                  return searchParams;
                });
              }
            }}
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
              setSearchParams((searchParams) => {
                searchParams.set("search", searchValue);
                return searchParams;
              });
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
          {vacanciesList &&
            vacanciesList.items.map((item) => {
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
          {vacanciesList?.items && vacanciesList?.items.length > 0 ? (
            <PaginationFooter vacanciesLength={vacanciesList?.items.length} />
          ) : (
            <p>Ничего не найдено</p>
          )}
        </div>
      </div>
    </section>
  );
};
