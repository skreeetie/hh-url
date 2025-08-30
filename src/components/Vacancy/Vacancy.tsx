import classNames from "classnames";
import style from "./style.module.scss";
import { Button } from "@mantine/core";

interface VacancyProps {
  name: string;
  exp_id: string;
}

export const Vacancy = ({ name, exp_id }: VacancyProps) => {
  const typeExp = (exp: string) => {
    switch (exp) {
      case "noExperience":
        return "Без опыта";
      case "between1And3":
        return "Опыт 1-3 года";
      case "between3And6":
        return "Опыт 3-6 лет";
      case "moreThan6":
        return "Опыт более 6 лет";
      default:
        break;
    }
  };
  return (
    <div className={style.vacancy}>
      <h3 className={style.title}>{name}</h3>
      <div className={style.requirements}>
        <p className={style.salary}>80 000 - 170 000</p>
        <p className={style.exp}>{typeExp(exp_id)}</p>
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
