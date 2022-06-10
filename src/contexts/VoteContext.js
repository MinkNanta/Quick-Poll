import React, { createContext, useContext } from "react";
const VoteContext = createContext();

export function VoteContextProvider({ children }) {
  return <VoteContext.Provider value={{}}>{children}</VoteContext.Provider>;
}
function useVote() {
  const ctx = useContext(VoteContext);
  return ctx;
}

export default VoteContextProvider;
export { useVote, VoteContext };
