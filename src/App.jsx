import React from "react";
import { BrowserRouter as Router, Route, RouterProvider ,createBrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";


// Pages & Layouts
import DashboardLayout from "./routes/DashboardLayout";
import HomePage from "./pages/Home/Home";
import LoginPage from "./pages/Auth/Login";

// Components
import LoadingSpinner from "./components/Loading";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      )},
    ],
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

export default () => {
  const [loading, setLoading] = React.useState(false);

  // React.useEffect(() => {
  //   // Simulate an API call or any asynchronous operation
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 0);
  // }, []);

  
  return (
    <>
    {loading ? (<LoadingSpinner />) : (
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>)

    }
    </>
  );
};