import { useContext } from "react";
import ListContext from "../context/ListContext";
import Key from "../helpers/Key";
import RecipeCard from "../components/RecipeCard";
import styled from "@emotion/styled";
const H2 = styled.h2`
margin:0;`



const MyListPage = () => {
  const { myFavList } = useContext(ListContext);
  return (
    <>
      {myFavList.length > 0 ? (
        <>
          <h2>Mis Favoritos</h2>
          {myFavList.map((db) => (
            <RecipeCard key={Key()} {...db} />
          ))}
        </>
      ) : (
        <p>Tu lista de favoritos está vacía</p>
      )}
    </>
  );
};

export default MyListPage;
