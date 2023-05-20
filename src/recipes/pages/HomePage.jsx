import SlideShow from "../../ui/components/SlideShow";
import RecipeList from "../components/RecipeList";

const HomePage = () => {
  return (
    <div>
      <SlideShow></SlideShow>

      <RecipeList type="arroz" />
    </div>
  );
};

export default HomePage;
