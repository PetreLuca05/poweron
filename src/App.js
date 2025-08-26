import NavigationBar from './components/NavigationBar';
import Hero from './index/Hero';
import Services from './index/Services';
import Portofolio from './index/Portofolio'
import AboutUs from './index/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Services />
      <Portofolio />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
