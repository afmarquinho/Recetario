import React from "react";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./auth/context/AuthProvider";
import ListProvider from "./recipes/context/ListProvider";

const RecipeApp = () => {
  return (
    <AuthProvider>
      <ListProvider>
        <AppRouter />
      </ListProvider>
    </AuthProvider>
  );
};

export default RecipeApp;
