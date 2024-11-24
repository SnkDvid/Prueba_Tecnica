import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Carrito } from "./components/Carrito";
import { Cartcontent } from "./components/Cartcontent";

function App() {
  return (
    <Cartcontent>
      <Router>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/cart" element={<Carrito />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Cartcontent>
  );
}

export default App;
