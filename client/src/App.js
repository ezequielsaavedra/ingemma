import "./App.css";
import AboutAs from "./components/AboutAs/AboutAs";
import BimMethodology from "./components/BimMethodology/BimMethodology";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Clients from "./components/Clients/Clients";
// import fondoBimMethodology from "./img/fondoBim.png";

function App() {
  return (
    <div className="App">
      <main>
        <div className="componentAboutAs">
          <AboutAs />
        </div>
        <div className="componentBimMethodology">
          <BimMethodology />
        </div>
        <div className="componentServices">
          <Services />
        </div>
        <div className="componentPortfolio">
          <Portfolio />
        </div>
        <div className="componentClients">
          <Clients />
        </div>
        <div className="componentContact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
