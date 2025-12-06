import React from "react";
import { Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserManage from "./pages/UserManage";
import Profile from "./pages/Profile";
import BudgetPreparation from "./pages/BudgetPreparation";
import Icons from "./pages/Icons";

// AUTH CHECKER
import { isAuthenticated } from "./services/auth";

// PRIVATE ROUTE WRAPPER
export const PrivateRoute = ({ children }) =>
  isAuthenticated() ? children : <Navigate to="/login" replace />;

// PUBLIC ROUTES
export const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  }
];

// PRIVATE ROUTES
export const privateRoutes = [
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/users",
    element: (
      <PrivateRoute>
        <UserManage />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
 },
  {
    path: "/budget-preparation",
    element: (
      <PrivateRoute>
        <BudgetPreparation />
      </PrivateRoute>
    ),
 },
  {
    path: "/icons",
    element: (
      <PrivateRoute>
        <Icons />
      </PrivateRoute>
    ),
  },
];

// DEFAULT ROUTES
export const defaultRoutes = [
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];
