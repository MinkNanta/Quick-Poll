import React, { createContext, useContext, useEffect, useState } from "react";

import axios from "../config/axios";

const VoteContext = createContext();

export function VoteContextProvider({ children }) {
  const [vote, setVote] = useState(false);

  const createVote = async ({ id, ansId, questionId }) => {
    try {
      const res = await axios.post("/poll/" + { id }, { ansId, questionId });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getVote = async (questionId) => {
    try {
      const res = await axios.get(`/vote/${questionId}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getVoteById = async (userId) => {
    try {
      const res = await axios.get(`/vote/user/${userId}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VoteContext.Provider
      value={{ vote, createVote, setVote, getVote, getVoteById }}
    >
      {children}
    </VoteContext.Provider>
  );
}
function useVote() {
  const ctx = useContext(VoteContext);
  return ctx;
}

export default VoteContextProvider;
export { useVote, VoteContext };
