import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid'
import ExploreSection from './components/ExploreSelection';
import InspirationSection from './components/Inspiration';
import AboutContactSection from './components/AboutContactSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ProductGrid />
      <ExploreSection />  
      <InspirationSection/>
      <AboutContactSection/>
    </div>
  );
}

export default App;
