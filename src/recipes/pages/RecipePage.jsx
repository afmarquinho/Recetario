import { Navigate, useParams } from "react-router-dom";
import getRecipeByName from "../helpers/getRecipeByName";
import { Img, Container, Info, H2, P, Span } from "../helpers/recipePage.style";


const RecipePage = () => {
  const video = (
    <iframe
      width="600"
      height="315"
      src="https://www.youtube.com/embed/H3sIVa5VWk8"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
  const { name } = useParams();
  const recipe = getRecipeByName(name);
  if (!recipe) {
    return <Navigate to="home" />;
  }
  const image = `/assets/images/${recipe.name}.jpg`;
  return (
    <>
      <Container>
        <Img src={image} alt={recipe.name}></Img>
        <Info>
          <H2>{recipe.name}</H2>
          <P>
            Tiempo de preparación: <Span>{recipe.time} mins.</Span>
          </P>
          <P>
            País de origen:{" "}
            <Span>
              {recipe.type[1].charAt(0).toLocaleUpperCase() +
                recipe.type[1].slice(1)}
            </Span>
          </P>
          <P>
            Tipo: <Span>{recipe.type[0]}</Span>
          </P>
          <P>
            Dificultad: <Span>{recipe.type[2]}</Span>
          </P>
        </Info>
      </Container>
      {video}
    </>
  );
};

export default RecipePage;
RecipePage;
