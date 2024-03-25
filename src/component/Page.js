import { useTheme } from "../contexts/ThemeContext";

import { Container } from "react-bootstrap";

export function Page({ children }) {
  const { theme } = useTheme();

  return (
    <Container
      className={`${theme === "light" ? "light-container" : "dark-container"}`}
      fluid
    >
      {children}
    </Container>
  );
}
