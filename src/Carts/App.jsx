import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import "./style.css";
import { AppProvider } from "./context";
const App = () => {
  return (
    <div>
      <AppProvider>
        <Navbar />
        <Container />
      </AppProvider>
    </div>
  );
};

export default App;