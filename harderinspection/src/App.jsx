import { useState, useEffect } from "react"; // Added hooks
import { BrowserRouter, Route, Routes, Link, useNavigate, } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons';
import "./App.css";

function HomePage() {
  return (
    <>
      <div className="header">
        <h1>Home Page</h1>
        <div id="mobilebars"><FontAwesomeIcon icon={faBars} /></div>
        <div className="desktopbars">
          <Link to={"/"}>Home</Link>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
