import { Route, Routes } from "react-router-dom";

import LoginPage from "../auth/LoginPage";
import RecipeRoutes from "../recipes/routes/RecipeRoutes";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<RecipeRoutes />} />

        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
