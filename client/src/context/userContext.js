import { createContext } from "react";

const UserContext = createContext(true, (obj) => obj);

export default UserContext;
