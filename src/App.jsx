import React from "react";
import { BrowserRouter as Router, Route, RouterProvider ,createBrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";


// Pages & Layouts
import DashboardLayout from "./routes/DashboardLayout";
import HomePage from "./pages/Home/Home";
import TransPage from "./pages/TransPage/Transpage";
import LoginPage from "./pages/Auth/Login";
import BudgetPage from "./pages/Budget/Budget";
import GoalsPage from "./pages/Budget/Goals";
import Profile from "./pages/Profile/Profile";

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
      { path: "/transactions", element: (
        <ProtectedRoute>
          <TransPage />
        </ProtectedRoute>
      )},
      { path: "/budget", element: (
        <ProtectedRoute>
          <BudgetPage />
        </ProtectedRoute>
      )},
      {
        path: "/goals", element: (
          <ProtectedRoute>
            <GoalsPage />
          </ProtectedRoute>
        )
      },
      {
        path: "/profile", element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

export default () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  
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