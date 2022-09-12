import { Routes, Route, useLocation } from "react-router-dom";
import DrinksPage from "../pages/DrinksPage";
import DrinkPage from "../pages/DrinkPage";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout/index";

const Router = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="drink" element={<DrinksPage />}></Route>
        <Route path="drink/:drinkId" element={<DrinkPage />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
