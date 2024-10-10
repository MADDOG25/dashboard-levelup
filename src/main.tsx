import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import "./index.css";
import RegisterForm from "./components/organisms/RegisterForm.tsx";
import LoginForm from "./components/organisms/LoginForm.tsx";
import PrivateRoute from "./routes/PrivateRoute.tsx";
import { AuthProvider } from "./AuthContext.tsx";

const router = createBrowserRouter([
  // Route Login Home Page
  {
    path: "/",
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
  // Route Register
  {
    path: "/signup",
    element: <RegisterForm />,
    errorElement: <ErrorPage />,
  },
  // Route Login
  {
    path: "/signin",
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
  // Route Home
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
