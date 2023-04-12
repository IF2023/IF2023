import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Impressum from "./pages/Impressum/Impressum";
import Contact from "./pages/Contact/Contact";
import Privacy from "./pages/Privacy/Privacy";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/datenschutz" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
