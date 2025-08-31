import type { Salary } from "./salary.env";

export type Vacancy = {
  alternate_url: string;
  area: {
    name: string;
  };
  id: string;
  employer: {
    name: string;
  };
  experience: {
    id: string;
  };
  name: string;
  salary: Salary;
  work_format: {
    id: string;
  }[];
};
