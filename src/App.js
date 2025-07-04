import './App.css';
import { About } from './components/about';
import { Footer } from './components/footer';
import { Hero } from './components/hero';
import { Projects } from './components/projects';


function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Footer />

    </div>
  );
}

export default App;
