import React from 'react';

export type GlobalContext = {};
export const AppContext = React.createContext<GlobalContext>({});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
