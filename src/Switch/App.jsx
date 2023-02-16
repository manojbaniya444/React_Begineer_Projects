import React from "react";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Home from "./Home";
import Comp from './Comp';
import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </div>
    </BrowserRouter>

     <Comp/>

    </>
  );
};

export default App;
