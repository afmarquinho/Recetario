import SlideShow from "../../ui/components/SlideShow";
import RecipeList from "../components/RecipeList";

const HomePage = () => {
  return (
    <div>
      <div className="slide-main">
        <SlideShow></SlideShow>
      </div>
      <RecipeList type="arroz" />
    </div>
  );
};

export default HomePage;
