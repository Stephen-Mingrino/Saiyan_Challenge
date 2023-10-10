import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import MainPage from "./components/MainPage"



function App(props) {
  return (
    <BrowserRouter>
      <div className="App " >
        <div className="dotcontainer zero">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>

          <div className="dot"></div>
        </div>
        <div className="dotcontainer one">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="dotcontainer two">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>

          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="dotcontainer three">
          <div className="dot"></div>
          <div className="dot"></div>

          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>

          <div className="dot"></div>
        </div>
        <div className="dotcontainer four">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>

          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>

          <div className="dot"></div>
        </div>
        <div className="dotcontainer five">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="dotcontainer2 six">
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
        </div>
        <div className="dotcontainer2 seven">
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
        </div>
        <div className="dotcontainer2 eight">
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
        </div>
        <div className="dotcontainer2 nine">
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
        </div>
        <div className="dotcontainer2 ten">
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
        </div>
        <div className="dotcontainer2 zero2">
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
        </div>
        <div className="dotcontainer3 oneb">
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
        </div>
        <div className="dotcontainer3 twob">
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>

        </div>
        <div className="dotcontainer3 threeb">
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
        </div>
        <div className="dotcontainer fourb">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="dotcontainer2 fiveb">
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
          <div className="dot2"></div>
        </div>
        <div className="dotcontainer3 sixb">
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
        </div>
        <div className="dotcontainer3 sevenb">
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
        </div>
        <div className="dotcontainer3 eightb">
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
        </div>
        <div className="dotcontainer3 nineb">
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
          <div className="dot3"></div>
        </div>

        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
