import { Route, Routes } from "react-router-dom";
import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage/HomePage";
import Header from "@components/ErrorMessage/Header/Header";
import NotFoundPage from "@containers/NotFoundPage/NotFoundPage";
// import routesConfig from "@routes/routesConfig";

import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      {/* <Routes>
        {routesConfig.map((route, index) => {
          <Route key={index} path={route.path} element={route.element} />;
        })}
      </Routes> */}

      <Routes>
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/people/*" element={<PeoplePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
