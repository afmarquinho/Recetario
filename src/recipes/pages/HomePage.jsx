import SlideShow from "../../ui/components/SlideShow";
import RecipeList from "../components/RecipeList";

const HomePage = () => {
  return (
    <>
      <SlideShow></SlideShow>

      <h2>Un recorrido por COLOMBIA</h2>
      <RecipeList type="colombia" />
      <h2>Lo mejores PASTAS italianas</h2>
      <RecipeList type="pasta" />
      <h2>Sorprende a tus comensales</h2>
      <RecipeList type="facil" />
    </>
  );
};

export default HomePage;
