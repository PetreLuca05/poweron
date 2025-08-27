import Home from './Home';
import About from './About';
import Portofolio from './Portofolio';
import Contact from './Contact';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
