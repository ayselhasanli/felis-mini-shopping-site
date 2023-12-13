import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./assets/css/main.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Homepage from "./pages/Homepage";
import Jewelry from "./pages/Jewelry";
import Faqs from "./pages/Faqs";
import Shoes from "./pages/Shoes";
import Bags from "./pages/Handbags";
import Shirts from "./pages/Shirts";
import Sweaters from "./pages/Sweaters";
import Eyewears from "./pages/Eyewear";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/jewelry" element={<Jewelry />} />
          <Route exact path="/shoes" element={<Shoes />} />
          <Route exact path="/bags" element={<Bags />} />
          <Route exact path="/shirts" element={<Shirts />} />
          <Route exact path="/sweaters" element={<Sweaters />} />
          <Route exact path="/eyewears" element={<Eyewears />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/all" element={<AllProducts />} />
          <Route exact path="/faqs" element={<Faqs />} />
        </Routes>
        <Footer />
      </Router>
    </AnimatePresence>
  );
}

export default App;
