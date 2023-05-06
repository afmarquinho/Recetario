import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
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
