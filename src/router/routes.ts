import MainPage from "../pages/MainPage/MainPage";
import SneakPage from "../pages/SneakPage/SneakPage";

export const MAIN_PAGE_ROUTE = "/";
export const SNEAK_PAGE_ROUTE = "/sneak";

export const routes = [
  {
    path: MAIN_PAGE_ROUTE,
    Component: MainPage,
  },
  {
    path: SNEAK_PAGE_ROUTE + "/:id",
    Component: SneakPage,
  },
];
