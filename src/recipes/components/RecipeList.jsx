import styled from "@emotion/styled";
import Key from "../helpers/Key";
import getRecipesByType from "../helpers/getRecipesByType";
import RecipeCard from "./RecipeCard";
import { useMemo } from "react";

const Div = styled.div``;

const RecipeList = ({ type }) => {
  const dataFilter = useMemo(()=>getRecipesByType(type), [type])  ;
  if (typeof dataFilter === "string") {
    return <p>{dataFilter}</p>;
  }
  return (
    <Div>
      {dataFilter.map((db) => (
        <RecipeCard key={Key()} {...db} />
      ))}
    </Div>
  );
};

export default RecipeList;
