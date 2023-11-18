import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "./src/store/AuthStore";

const RoleRoute = ({ allowedRole, children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(`/auth/login`);
    }
    if (user && user?.role !== allowedRole) {
      navigate(`/unauthorized`);
    }
  }, [user, navigate, allowedRole]);

  return <>{user && <Outlet>{children}</Outlet>}</>;
};

export const MenteeRoute = ({ children }) => (
  <RoleRoute allowedRole="mentee">{children}</RoleRoute>
);

export const MentorRoute = ({ children }) => (
  <RoleRoute allowedRole="mentor">{children}</RoleRoute>
);
