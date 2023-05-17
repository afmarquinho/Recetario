import { useReducer } from "react";
import AuthContext from "./AuthContext";
import authReducer from "./authReducer";
import { types } from "../types/types";
import Key from "../../recipes/helpers/Key";

// const initialState = {
//   logged: false,
// };
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user: user,
  };
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const user = { id: Key(), name };
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));
    authDispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.logout,
    };
    authDispatch(action);
  };
  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
