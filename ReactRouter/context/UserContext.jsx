import { createContext, useContext, useState } from "react";
const UserContext = createContext({});

export function UserProvider({ children }) {
  const [title, setTitle] = useState("This is a  title");
  const value = { title, setTitle };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => {
  return useContext(UserContext);
};
export default UserContext;
