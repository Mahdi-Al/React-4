import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// import MakeAdvice from "./2-RandomAdviceRendering/Advices-jenerator.jsx";
import "./index.css";
// import DataFetchingComponent from "./1-PostRendering/Posts";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <DataFetchingComponent /> */}
    {/* <MakeAdvice /> */}
    <App />
  </StrictMode>
);
