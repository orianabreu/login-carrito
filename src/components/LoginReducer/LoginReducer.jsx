import React, { useReducer } from "react";
import { Link } from "react-router-dom";

import { login } from "../../data/login";
import ProductsList from "../ProductsList/ProductsList";

function reducer(state, action) {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case "inputFields": {
      return {
        ...state,
        [action.inputName]: action.payload, // [name]: value
      };
    }
    case "login": {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case "error": {
      //debugger
      return {
        ...state,
        error: "Incorret username or password...",
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        username: "",
        password: "",
      };
    }
    default:
      return state;
  }
}

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

export default function LoginReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "login" });

    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      //debugger
      dispatch({ type: "error" });
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Hola {username}</h1>
          <button
            onClick={() => {
              dispatch({ type: "logout" });
            }}
          >
            Log out
          </button>
          <Link to='/carrito'>Ver Carrito</Link>
          <ProductsList />
        </>
      ) : (
        <form onSubmit={onSubmit}>
          {error && <p>{error}</p>}
          <p>Please login!</p>
          <input
            type='text'
            value={username}
            onChange={(e) =>
              dispatch({
                type: "inputFields",
                inputName: "username",
                payload: e.target.value,
              })
            }
          />
          <input
            type='password'
            value={password}
            onChange={(e) =>
              dispatch({
                type: "inputFields",
                inputName: "password",
                payload: e.target.value,
              })
            }
          />
          <button type='submit'>{isLoading ? "Logging in..." : "Login"}</button>
        </form>
      )}
    </div>
  );
}
