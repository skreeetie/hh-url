import { Button, TextInput } from "@mantine/core";
import Search from "../../assets/search.svg?react";
import style from "./style.module.scss";

export const VacanciesList = () => {
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
    </section>
  );
};
