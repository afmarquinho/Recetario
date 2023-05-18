import { useContext } from "react";
import ListContext from "../context/ListContext";
import Key from "../helpers/Key";
import RecipeCard from "../components/RecipeCard";



const MyListPage = () => {
  const { myFavList } = useContext(ListContext);
  return (
    <>
      { myFavList.map((db) => (
        <RecipeCard key={Key()} {...db} />
      ))}
    </>
  );
};

export default MyListPage;
