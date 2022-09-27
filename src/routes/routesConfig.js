import HomePage from "@containers/HomePage/HomePage";
import PeoplePage from "@containers/PeoplePage";

const routesConfig = [
  {
    path: "/home/*",
    element: HomePage,
  },
  {
    path: "/people/*",
    element: PeoplePage,
  },
];

export default routesConfig;
