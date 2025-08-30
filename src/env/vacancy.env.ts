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
  salary: {
    currency: string;
    from: string;
    to: string | null;
  } | null;
  work_format: {
    id: string;
  }[];
};
