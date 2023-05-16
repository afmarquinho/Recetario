import { Navigate, useNavigate, useParams } from "react-router-dom";
import getRecipeByName from "../helpers/getRecipeByName";
import {
  Img,
  Container,
  Info,
  H2,
  P,
  Span,
  Button,
  P1,
  Container2,
  Instrucciones,
  Preparacion,
  Ingredientes,
  Ul,
  Ol,
  Video,
} from "../helpers/recipePage.style";
import { useMemo } from "react";

const RecipePage = () => {
  // const video = (
  //   <iframe
  //     width="100%"
  //     height="315"
  //     src="https://www.youtube.com/embed/H3sIVa5VWk8"
  //     title="YouTube video player"
  //     frameborder="0"
  //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //     allowfullscreen
  //   ></iframe>
  // );
  const { name } = useParams();
  const recipe = useMemo (()=> getRecipeByName(name), [name]);
  if (!recipe) {
    return <Navigate to="home" />;
  }
  
  const back = useNavigate();

  const onNavigateBack = () => {
    back(-1);
  };
  return (
    <>
      <Container>
        <Img src={ `/assets/images/${recipe.name}.jpg`} alt={recipe.name}></Img>
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
          <Button onClick={onNavigateBack}>Back</Button>
          <P1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id commodi
            veniam dolor debitis et fugiat? Error, deserunt cupiditate? Nihil
            rem maiores at dignissimos ad exercitationem soluta dicta fuga
            laborum?
          </P1>
        </Info>
      </Container>
      <hr />
      <Container2>
        <Video>Video aquí</Video>
        <Instrucciones>
          <Ingredientes>
            <p>Ingredientes</p>
            <Ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum..</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem.</li>
              <li>Lorem.</li>
            </Ul>
          </Ingredientes>

          <Preparacion>
            <p>Preparación</p>
            <Ol>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Soluta, ea.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo
                expedita et ipsam corrupti, dolorum tempore libero?.
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Soluta, ea.
              </li>
            </Ol>
          </Preparacion>
        </Instrucciones>
      </Container2>
    </>
  );
};

export default RecipePage;
