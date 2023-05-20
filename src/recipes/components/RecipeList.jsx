import styled from "@emotion/styled";
import Key from "../helpers/Key";
import getRecipesByType from "../helpers/getRecipesByType";
import RecipeCard from "./RecipeCard";
import { useMemo } from "react";
import { data } from "../../data/data";

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 2rem;
  width: 100rem;
`;
const DivContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;
margin: 0 auto;
padding: auto;`

const RecipeList = ({ type = "" }) => {
  if (type === "") {
    const dataFilter = data;
    return (
      <DivContainer>
        <Div>
          {dataFilter.map((db) => (
            <RecipeCard key={Key()} {...db} />
          ))}
        </Div>
      </DivContainer>
    );
  }
  const dataFilter = useMemo(() => getRecipesByType(type), [type]);
  if (typeof dataFilter === "string") {
    return <p>{dataFilter}</p>;
  }
  return (
    <DivContainer>
      <Div className="cardContainer">
        {dataFilter.map((db) => (
          <RecipeCard key={Key()} {...db} />
        ))}
      </Div>
    </DivContainer>
  );
};

export default RecipeList;
