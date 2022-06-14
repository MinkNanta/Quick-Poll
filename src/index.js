import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import ErrorContextProvider from "./contexts/ErrorContext";
import PollContextProvider from "./contexts/PollContext";
import VoteContextProvider from "./contexts/VoteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <ErrorContextProvider>
      <AuthContextProvider>
        <PollContextProvider>
          <VoteContextProvider>
            <App />
          </VoteContextProvider>
        </PollContextProvider>
      </AuthContextProvider>
    </ErrorContextProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
