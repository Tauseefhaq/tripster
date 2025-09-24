import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/trips";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/trips" element={<Service></Service>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/sign-up" element={<SignUp></SignUp>} />
      </Routes>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
