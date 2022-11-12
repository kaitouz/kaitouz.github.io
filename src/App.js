import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";

import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";

import "./App.css";

function App() {
  return (
    <HashRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Navbar />
        </div>
    </HashRouter>
  );
}

export default App;
