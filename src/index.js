import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import ErrorContextProvider from "./contexts/ErrorContext";
import PollContextProvider from "./contexts/PollContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ErrorContextProvider>
        <AuthContextProvider>
          <PollContextProvider>
            <App />
          </PollContextProvider>
        </AuthContextProvider>
      </ErrorContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
