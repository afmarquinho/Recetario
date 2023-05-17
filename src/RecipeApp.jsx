import React from "react";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./auth/context/AuthProvider";

const RecipeApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default RecipeApp;
