//1 initilise your context and export it
//2 initilise a initial value for your context
//3 create a reducer function
//4 create a context provider

import { createContext, useReducer } from "react";
import { useEffect } from "react";

export const UserContext = createContext();

const initialValues = JSON.parse(localStorage.getItem("user")) || {
  user: null,
  isAuth: false,
  userInfo: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      var data = {
        user: action.payload,
        isAuth: true,
      };
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    case "LOGOUT":
       data = {
        user: null,
        isAuth: false,
        userInfo: null,
      };
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    case "SET_USER_INFO":
       data = {
        ...state,
        userInfo: action.payload,
      };

      localStorage.setItem("user", JSON.stringify(data));
      return data;
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [userData, dispatch] = useReducer(reducer, initialValues);

  useEffect(() => {
    console.log(userData);
  }, [userData]);
  return (
    <UserContext.Provider value={[userData, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
