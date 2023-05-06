import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../../ui/components/NavBar";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import MyListPage from "../pages/MyListPage";
import RecipePage from "../pages/RecipePage";


const RecipeRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="contenedor">
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="my-list" element={<MyListPage />} />
          <Route path="recipe/:name" element={<RecipePage />} />

          <Route path="/" element={<Navigate to="home" />} />
        </Routes>
      </div>
    </>
  );
};

export default RecipeRoutes;
