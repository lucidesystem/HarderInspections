import { useState, useEffect } from "react"; // Added hooks
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars } from "@fortawesome/free-solid-svg-icons";
import About from "./pages/about"
import "./App.css";

function HomePage() {
  return (
    <>
      <div className="header">
        <div id="mobilebars">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="desktopbars">
          <Link to={"/"} className="link">
            Home
          </Link>
        </div>
        <div className="desktopbars">
          <Link to={"/about"} className="link">
            asdjfasjdkfhklj
          </Link>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
