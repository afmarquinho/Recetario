import { H2, P, InputName, DivInputName, Filters, H3 } from "../helpers/search.Styled";

const SearchPage = () => {
  return (
    <>
      <form action="">
        <DivInputName className="input-name">
          <H2>Search</H2>
          <InputName
            type="text"
            name="name"
            className="name"
            placeholder="type the name"
          />
        </DivInputName>
        <P>Filter by...</P>
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
        </Filters>
      </form>
      <hr />
      <H3>Results</H3>
    </>
  );
};

export default SearchPage;
