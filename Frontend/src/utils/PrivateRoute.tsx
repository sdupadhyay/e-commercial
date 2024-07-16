import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isUserAuthenticated } from ".";

export const PrivateRoute: React.FC = () => {
	let isAuth = isUserAuthenticated();
	return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
