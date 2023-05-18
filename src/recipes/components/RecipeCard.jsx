import { Link } from "react-router-dom";
import { P, P1, CardContainer, IMG, Div } from "../helpers/recipeCard.Styled";

const RecipeCard = ({ id, name, type, url, time }) => {
  // OBJETO PARA CAPTURAR LA HACER CLICK, QUE LUEGO PASARÉ COMO PROP ALA FUNCION QUE IMPORTO DESDE EL CONTEXT
  const imgUrl = `/assets/images/${name}.jpg`;

  return (
    <>
      <Link to={`/recipe/${name}`}>
        {" "}
        <CardContainer className="card__container">
          <IMG src={imgUrl} alt={name} className="recipe-img" />
          <Div>
            <P>{name}</P>
          </Div>
          <P1> Ver mas...</P1>
        </CardContainer>
      </Link>
    </>
  );
};

export default RecipeCard;
