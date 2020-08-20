import React, { useReducer, createContext } from "react";
import UserReducer from "./userReducer";

let emptyState = {
  loggedIn: false,
  username: "",
}, defaultState = {};

if (localStorage.getItem("currentUser")) {
  defaultState = JSON.parse(localStorage.getItem("currentUser"));
} else {
  defaultState = emptyState;
}

const UserContext = createContext(defaultState);

export const UserContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(UserReducer, defaultState);

  function FetchUser() {
    fetch("/user", { credentials: 'include' })
      .then(data => data.json())
      .then(dataJson => {
        dispatch({
          type: "FETCH_USER",
          payload: dataJson.user
        });
      })
      .catch(console.log);
  }

  async function LogoutUser () {
    await fetch("/logout", { credentials: 'include' });
    dispatch({
      type: "LOGOUT_USER",
      payload: emptyState
    });
  }

  return (
    <UserContext.Provider value={{
      user: state,
      FetchUser,
      LogoutUser,
    }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserContext;