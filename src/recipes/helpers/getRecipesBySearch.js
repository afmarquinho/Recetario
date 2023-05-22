import { data } from "../../data/data";

const getRecipesBySearch = (search = "") => {
  search = search.trim().toLowerCase();
  if (search.length === 0) return [];

  return data.filter((recipe) =>
    recipe.name.trim().toLowerCase().includes(search)
  );
};

export default getRecipesBySearch;
