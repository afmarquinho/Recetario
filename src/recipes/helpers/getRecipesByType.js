import { data } from "../../data/data";

const getRecipesByType = ( type ) => {
  const dataFilter = data.filter((db) => db.type.includes(type));
  if (dataFilter.length > 0) {
    return dataFilter;
  }
  dataFilter = "No hay datos para mostrar";
  return dataFilter;
};
export default getRecipesByType;
