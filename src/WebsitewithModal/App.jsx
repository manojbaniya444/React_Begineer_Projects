import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import "./index.css";
import { AppProvider } from "./context";
const App = () => {
  return (
    <div>
      <AppProvider>
        <Navbar />
        <Sidebar />
        <Container />
        <Submenu />
      </AppProvider>
    </div>
  );
};

export default App;
