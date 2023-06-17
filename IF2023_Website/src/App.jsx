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
			<BrowserRouter>
				<Navbar
					logo="/assets/IF-Logo_white.svg"
					links={[
						{ name: "Programm", id: "program" },
						{ name: "Projekte", id: "projects" },
						// { name: "Electives", id: "electives" },
					]}
				/>
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
