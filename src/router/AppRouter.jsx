import { Route, Routes } from "react-router-dom";

import LoginPage from "../auth/pages/LoginPage";
import RecipeRoutes from "../recipes/routes/RecipeRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="login" element={<LoginPage />} /> */}

        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <RecipeRoutes />
            </PrivateRoute>
          }
        />

        {/* <Route path="/*" element={<RecipeRoutes />} /> */}
      </Routes>
    </div>
  );
};

export default AppRouter;
