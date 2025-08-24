import NavigationBar from './components/NavigationBar';
import Hero from './Hero';
import Services from './Services';
import bgImage1 from "./assets/bg.jpg";
import bgImage2 from "./assets/bg2.jpg";
import bgImage3 from "./assets/bg3.jpg";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
