import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/app.scss";

import Login from "./pages/Login";
import Register from "./pages/Register";

import NavBar from "./components/Navbar";
import Devis from "./pages/Devis";
import Footer from "./components/Footer";
import ContactForm from "./pages/Contact ";
import Profil from "./pages/Profil ";
import Traducteur from "./pages/Traducteur";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/traducteur" element={<Traducteur />} />

        <Route path="/contact" element={<ContactForm />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profil />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
