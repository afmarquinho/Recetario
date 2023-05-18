import styled from "@emotion/styled";
import Key from "../helpers/Key";
import getRecipesByType from "../helpers/getRecipesByType";
import RecipeCard from "./RecipeCard";
import { useMemo } from "react";
import { data } from "../../data/data";

const Div = styled.div``;

const RecipeList = ({ type = "" }) => {
  if (type === "") {
    const dataFilter = data;
    return (
      <Div>
        {dataFilter.map((db) => (
          <RecipeCard key={Key()} {...db} />
        ))}
      </Div>
    );
  }
  const dataFilter = useMemo(() => getRecipesByType(type), [type]);
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
