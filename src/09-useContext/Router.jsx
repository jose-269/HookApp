import { createBrowserRouter } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { MainPage } from "./MainPage";
 
export const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage/>,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <HomePage/>,
                },
                {
                    path: "login",
                    element: <LoginPage/>,
                },
                {
                    path: "about",
                    element: <AboutPage/>,
                },
            ]
        }
    ]);
 
  return router;
}