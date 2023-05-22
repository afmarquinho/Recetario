import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Key from "../helpers/Key";
import getRecipesBySearch from "../helpers/getRecipesBySearch";

import {
  H2,
  P,
  P2,
  InputName,
  DivInputName,
  Filters,
  H3,
  Form,
  ResultsContainter,
} from "../helpers/search.Styled";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const onformSubmit = (e) => {
    e.preventDefault();
  };
  const onInputChange = (e) => {
    setInputValue(e.target.value);
    if (inputValue.trim().length < 1) return;
    navigate(`?q=${inputValue.toLowerCase().trim()}`);
  };
  const recipeFiltered = getRecipesBySearch(inputValue.trim().toLowerCase());
  return (
    <>
      <Form className="formulario" action="" onSubmit={onformSubmit}>
        <DivInputName className="input-name">
          <H2>Buscar</H2>
          <InputName
            type="text"
            name="name"
            className="name"
            placeholder="type the name"
            onChange={onInputChange}
            value={inputValue}
            autoComplete="off"
          />
        </DivInputName>
        {/* <P>Filtrar por...</P>
        <Filters>
          <div>
            <label htmlFor="type">Tipo de Plato </label>
            <select name="type" id="type">
              <option value="">-- Seleccione--</option>
              <option value="arroz">Arroces</option>
              <option value="crema">Cremas</option>
              <option value="ensalada">Ensaladas</option>
              <option value="mariscos">Maricos</option>
              <option value="pasta">Pasta</option>
              <option value="sopa">Sopas</option>
              <option value="variado">Otros</option>
            </select>
          </div>

          <div>
            <label htmlFor="country">País </label>
            <select name="country" id="country">
              <option value="">-- Seleccione--</option>
              <option value="argentina">Argentina</option>
              <option value="bolivia">Bolivia</option>
              <option value="chile">Chile</option>
              <option value="colombia">Colombia</option>
              <option value="ecuador">Ecuador</option>
              <option value="mexico">México</option>
              <option value="paraguay">Paraguay</option>
              <option value="peru">Perú</option>
              <option value="uruguay">Uruguay</option>
              <option value="venezuela">Venezuela</option>
            </select>
          </div>

          <div>
            <label htmlFor="dificulty">Dificultad </label>
            <select name="dificulty" id="dificulty">
              <option value="">-- Seleccione--</option>
              <option value="facil">Fácil</option>
              <option value="medo">Medio</option>
              <option value="dificil">Dificil</option>
            </select>
          </div>

          <div>
            <label htmlFor="time">Tiempo </label>
            <select name="time" id="time">
              <option value="">-- Seleccione--</option>
              <option value="10"> menos 10 </option>
              <option value="30"> menos 30 </option>
              <option value="50"> menos 50 </option>
              <option value="51"> más 50 </option>
            </select>
          </div>
        </Filters> */}
      </Form>
      <hr />
      <H3>Results</H3>
      <ResultsContainter>
        {recipeFiltered.length < 1 ? (
          <P2>No hay resutados que coinciden con la busqueda.</P2>
        ) : (
          recipeFiltered.map((recipe) => <RecipeCard key={Key()} {...recipe} />)
        )}
      </ResultsContainter>
    </>
  );
};

export default SearchPage;
