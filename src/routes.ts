import About from "./components/About";
import EmploymentHistory from "./components/EmploymentHistory";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

interface Route {
  name: string;
  route: string;
  component: () => JSX.Element;
}

const routes: Route[] = [
  {
    name: "Home",
    route: "/",
    component: Home,
  },
  {
    name: "About",
    route: "/about",
    component: About,
  },
  {
    name: "Portfolio",
    route: "/portfolio",
    component: Portfolio,
  },
  {
    name: "Employment History",
    route: "/employment-history",
    component: EmploymentHistory,
  },
];

export { routes };
