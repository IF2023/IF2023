import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Impressum from "./pages/Impressum/Impressum";
import Contact from "./pages/Contact/Contact";
import Privacy from "./pages/Privacy/Privacy";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <div className="App">
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/impressum" element={<Impressum />} />
          {/* <Route path="/kontakt" element={<Contact />} /> */}
          <Route exact path="/datenschutz" element={<Privacy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
