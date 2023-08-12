import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import BIM from './pages/BIM/BIM';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Portfolio from './pages/Portfolio/Portfolio';
import WspButton from './components/WspButton/WspButton';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appContainer">
        <Home />
        <Portfolio />
        <BIM />
      </div>
      <WspButton />
      <Footer />
    </div>
  );
}

export default App;
