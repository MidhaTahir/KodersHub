import { isEmpty } from 'lodash';
import axios from 'axios';

export default function (state, action) {
  switch(action.type) {
    case 'FETCH_USER':
      if (action.payload) {
        let loggedIn = !isEmpty(action.payload);
        let { username, htmlTaskPointer, cssTaskPointer, jsTaskPointer} = action.payload;
        localStorage.setItem("currentUser", JSON.stringify({ username, htmlTaskPointer, cssTaskPointer, jsTaskPointer, loggedIn }));
        return { username, htmlTaskPointer, cssTaskPointer, jsTaskPointer, loggedIn };
      }
      return state;
    case 'LOGOUT_USER':
      localStorage.removeItem("currentUser");
      return action.payload;
    default:
      return state;
  }
}