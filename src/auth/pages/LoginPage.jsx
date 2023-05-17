import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogin = () => {
    login("marquinhos2353");

    navigate("/", { relative: true });
  };

  return (
    <div className="contenedor">
      Login Page
      <hr />
      <button type="button" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
