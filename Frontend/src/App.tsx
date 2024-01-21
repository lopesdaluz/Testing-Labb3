import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Gift from "./Pages/Gift";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gift/:cardName" element={<Gift />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
