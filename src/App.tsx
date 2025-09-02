import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Vacancies } from "./pages/Vacancies/Vacancies";
import { Header } from "./modules/Header";
import { theme } from "./theme.env";
import "./App.scss";

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Vacancies />
    </MantineProvider>
  );
};
