import { types } from "../types/types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return { ...state, logged: true, name: action.payload };

    case types.logout:
      return {
        logged: false,
        // name: null,
      };

    default:
      return state;
  }
};

export default authReducer;
