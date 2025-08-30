import classNames from "classnames";
import style from "./style.module.scss";
import { Button } from "@mantine/core";

export const Vacancy = () => {
  return (
    <div className={style.vacancy}>
      <h3 className={style.title}>Frontend разработчик в EdTech продукт</h3>
      <div className={style.requirements}>
        <p className={style.salary}>80 000 - 170 000</p>
        <p className={style.exp}>Опыт 1-3 года</p>
      </div>
      <p className={style.employer}>Kata Academy</p>
      <p className={classNames(style.work, style["work--remote"])}>
        Можно удаленно
      </p>
      <p className={style.address}>Набережные Челны</p>
      <div className={style.buttons}>
        <Button
          color="black.9"
          variant="filled"
          size="md"
          classNames={{ label: style["see-more"], root: style["wrapper-more"] }}
        >
          Смотреть вакансию
        </Button>
        <Button
          size="md"
          variant="filled"
          color="ultra-light.9"
          classNames={{ label: style.respond, root: style["wrapper-respond"] }}
        >
          Откликнуться
        </Button>
      </div>
    </div>
  );
};
