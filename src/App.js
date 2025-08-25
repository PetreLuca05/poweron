import NavigationBar from './components/NavigationBar';
import Hero from './Hero';
import Services from './Services';
import Portofolio from './Portofolio'
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Services />
      <Portofolio />
      <AboutUs />
    </div>
  );
}

export default App;
