import './App.css';
import AboutAs from './components/AboutAs/AboutAs';
import BimMethodology from './components/BimMethodology/BimMethodology';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from "./components/Contact/Contact"
import Clients from './components/Clients/Clients';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AboutAs />
        <BimMethodology />
        <Services />
        <Portfolio />
        <Clients />
        <Contact />
      </header>
    </div>
  );
}

export default App;
