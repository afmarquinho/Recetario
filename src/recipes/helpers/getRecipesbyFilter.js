import { data } from "../../data/data";


const getRecipesbyFilter = (filter = "") => {
   filter = filter.trim().toLowerCase();
   if (filter.length === 0) return [];
   return data.filter((recipe) =>recipe.type.trim().toLowerCase().includes(filter));
};

export default getRecipesbyFilter
