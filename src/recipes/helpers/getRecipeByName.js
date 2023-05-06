import { data } from "../../data/data";

const getRecipeByName = (name) => {
  return data.find((db) => db.name === name);
};

export default getRecipeByName;
