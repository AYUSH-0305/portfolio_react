
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import './App.css';



function App() {
  
  return (
    <div className="App">
      <Navbar />
      <About />
      <footer>
        <Contact />
      </footer>
      
    </div>
  );
}

export default App;
