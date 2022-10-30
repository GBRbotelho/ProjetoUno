import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Logo from "./components/imgs/uno.png";
import Game from "./components/pages/Home/Game";

function App() {
  return (
    <Router>
      <div className="Container_Logo">
        <img src={Logo} />
        <div>
          <h1>Contador de Pontos</h1>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>

      <h1>FOOTER</h1>
    </Router>
  );
}

export default App;
