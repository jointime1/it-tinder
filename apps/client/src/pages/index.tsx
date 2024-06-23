import { MainPage } from "./MainPage";
import { RegisterPage } from "./RegisterPage";

export const ROUTES_CONFIG = [
  {
    id: "main",
    path: "/",
    element: <MainPage />,
  },
  {
    id: "register",
    path: "/register",
    element: <RegisterPage />,
  },
];
