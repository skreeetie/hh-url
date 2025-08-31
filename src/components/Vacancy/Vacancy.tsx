import classNames from "classnames";
import style from "./style.module.scss";
import { Button } from "@mantine/core";
import type { Salary } from "../../env/salary.env";

interface VacancyProps {
  name: string;
  exp_id: string;
  alternate: string;
  employer: string;
  salary: Salary;
}

export const Vacancy = ({
  name,
  exp_id,
  alternate,
  employer,
  salary,
}: VacancyProps) => {
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
  const findSalary = (salary: Salary) => {
    if (salary) {
      switch (salary.currency) {
        case "AZN":
          if (salary.to !== null && salary.from !== null) {
            return `${salary.from} - ${salary.to} ₼`;
          } else if (salary.to !== null && salary.from === null) {
            return `До ${salary.to} ₼`;
          }
          return `От ${salary.from} ₼`;
        case "BYR":
          if (salary.to !== null && salary.from !== null) {
            return `${salary.from} - ${salary.to} Br`;
          } else if (salary.to !== null && salary.from === null) {
            return `До ${salary.to} Br`;
          }
          return `От ${salary.from} Br`;
        case "EUR":
          if (salary.to !== null && salary.from !== null) {
            return `${salary.from} - ${salary.to} €`;
          } else if (salary.to !== null && salary.from === null) {
            return `До ${salary.to} €`;
          }
          return `От ${salary.from} €`;
        case "GEL":
          if (salary.to !== null && salary.from !== null) {
            return `${salary.from} - ${salary.to} ₾`;
          } else if (salary.to !== null && salary.from === null) {
            return `До ${salary.to} ₾`;
          }
          return `От ${salary.from} ₾`;
        case "KGS":
          if (salary.to !== null && salary.from !== null) {
            return `${salary.from} - ${salary.to} с`;
          } else if (salary.to !== null && salary.from === null) {
            return `До ${salary.to} с`;
          }
          return `От ${salary.from} с`;
        case "KZT":
          if (salary.to !== null && salary.from !== null) {
            return `${salary.from} - ${salary.to} ₸`;
          } else if (salary.to !== null && salary.from === null) {
            return `До ${salary.to} ₸`;
          }
          return `От ${salary.from} ₸`;
        case "RUR":
          if (salary.to !== null && salary.from !== null) {
            return `${salary.from} - ${salary.to} ₽;`;
          } else if (salary.to !== null && salary.from === null) {
            return `До ${salary.to} ₽`;
          }
          return `От ${salary.from} ₽`;
      }
    } else {
      return "Не указано";
    }
  };
  return (
    <div className={style.vacancy}>
      <h3 className={style.title}>{name}</h3>
      <div className={style.requirements}>
        <p className={style.salary}>{findSalary(salary)}</p>
        <p className={style.exp}>{typeExp(exp_id)}</p>
      </div>
      <p className={style.employer}>{employer}</p>
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
          onClick={() => {
            window.open(alternate);
          }}
        >
          Откликнуться
        </Button>
      </div>
    </div>
  );
};
