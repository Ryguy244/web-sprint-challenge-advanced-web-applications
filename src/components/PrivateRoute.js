import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = (props) => {
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={() => {
        return localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
