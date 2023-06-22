import React, { useState } from "react";
//import styles
import "./styles/root.scss";
//import pages
import Castles from "./pages/Castles";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
//import React Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import hamburger
import { Turn as Hamburger } from "hamburger-react";
//import icons
import { VscAccount } from "react-icons/vsc";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Router>
      <nav>
        <div className="logo">
          <Link to="/">
            <h1>Castles</h1>
          </Link>
        </div>
        <div className="items">
          <Link to="/castles">Castles</Link>
          <Link to="/about">About</Link>
        </div>
        <button className="button-account">
          <VscAccount className="account-icon" />
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size="24"
            className="hamburger"
          />
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/castles" element={<Castles />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
