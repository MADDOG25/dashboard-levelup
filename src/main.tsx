import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import "./index.css";
import RegisterForm from "./components/organisms/RegisterForm.tsx";
import LoginForm from "./components/organisms/LoginForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <RegisterForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage />,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
