import React, { createContext } from 'react';
 
export const Store = createContext();
 
const StoreProvider = ({ children }) => {
  return <Store.Provider value="Hello worid. I'm store valie">{children}</Store.Provider>;
};
 
export default StoreProvider;