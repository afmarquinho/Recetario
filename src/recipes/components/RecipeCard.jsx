import { Link } from "react-router-dom";
import {
  P,
  CardContainer,
  Button,
  IMG,
  Div,
} from "../helpers/recipeCard.Styled";

const svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="30"
    viewBox="0 96 960 960"
    width="30"
  >
    <path
      d="M510 678h60V546h132v-60H570V354h-60v132H378v60h132v132ZM260 856q-24 0-42-18t-18-42V236q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560V236H260v560ZM140 976q-24 0-42-18t-18-42V296h60v620h620v60H140Zm120-740v560-560Z"
      fill="rgb(255, 76, 76)"
    />
  </svg>
);

const RecipeCard = ({ id, name, type, link, time }) => {
  const imgUrl = `/assets/images/${name}.jpg`;
  return (
    <Link to={`/recipe/${name}`}>
      <CardContainer className="card__container">
        <IMG src={imgUrl} alt={name} className="recipe-img" />
        <Div>
          <P>{name}</P>
        </Div>
        <Button>{svg}</Button>
      </CardContainer>
    </Link>
  );
};

export default RecipeCard;
