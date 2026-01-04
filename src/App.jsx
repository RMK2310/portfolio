import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Internships from './components/Internships';
import Certifications from './components/Certifications';
import ZoomableProjects from './components/ZoomableProjects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Internships />
      <Certifications />
      <ZoomableProjects />
      <Contact />
    </div>
  )
}

export default App;
