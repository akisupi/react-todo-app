import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUserName());
  function getUserName(){
    // getting store data
    const temp = localStorage.getItem('username');
    const savedUsername = JSON.parse(temp);
    return savedUsername || '';
  }

  useEffect(() => {
    // storing user state
    const temp = JSON.stringify(user);
    localStorage.setItem('username', temp);
  })
  const login = (user) => setUser(user);
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
