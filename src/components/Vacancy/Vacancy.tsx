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
  place: string;
  work_format: {
    id: string;
  }[];
}

export const Vacancy = ({
  name,
  exp_id,
  alternate,
  employer,
  salary,
  place,
  work_format,
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
        case "UAH":
          if (salary.to !== null && salary.from !== null) {
            return `${salary.from} - ${salary.to} ₴`;
          } else if (salary.to !== null && salary.from === null) {
            return `До ${salary.to} ₴`;
          }
          return `От ${salary.from} ₴`;
        case "USD":
          if (salary.to !== null && salary.from !== null) {
            return `${salary.from} - ${salary.to} $`;
          } else if (salary.to !== null && salary.from === null) {
            return `До ${salary.to} $`;
          }
          return `От ${salary.from} $`;
        case "UZS":
          if (salary.to !== null && salary.from !== null) {
            return `${salary.from} - ${salary.to} Soʻm`;
          } else if (salary.to !== null && salary.from === null) {
            return `До ${salary.to} Soʻm`;
          }
          return `До ${salary.from} Soʻm`;
        default:
          break;
      }
    } else {
      return "Не указано";
    }
  };
  const getWorkFormat = (format: string) => {
    switch (format) {
      case "ON_SITE":
        return "Офис";
      case "REMOTE":
        return "Можно удаленно";
      case "HYBRID":
        return "Гибрид";
      case "FIELD_WORK":
        return "Разъездная";
      default:
        break;
    }
  };
  const getWorkSelector = (format: string) => {
    switch (format) {
      case "ON_SITE":
        return "work--office";
      case "REMOTE":
        return "work--remote";
      case "HYBRID":
        return "work--hybrid";
      case "FIELD_WORK":
        return "work--field";
      default:
        break;
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
      <p
        className={classNames(
          style.work,
          work_format.length >= 1
            ? style[`${getWorkSelector(work_format[0].id)}`]
            : style["work--office"]
        )}
      >
        {work_format.length >= 1 ? getWorkFormat(work_format[0].id) : "Офис"}
      </p>
      <p className={style.address}>{place}</p>
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
