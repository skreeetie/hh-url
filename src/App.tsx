import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Vacancies } from "./pages/Vacancies/Vacancies";
import { Routes, Route } from "react-router";
import { Header } from "./modules/Header";
import { theme } from "./theme.env";
import "./App.scss";
import { VacancyPage } from "./pages/VacancyPage/VacancyPage";

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/hh-url/vacancies" element={<Vacancies />} />
        <Route path="/hh-url/vacancies/:id" element={<VacancyPage />} />
      </Routes>
    </MantineProvider>
  );
};
