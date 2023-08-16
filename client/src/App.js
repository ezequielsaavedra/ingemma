import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BIM from './pages/BIM/BIM';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import PortfolioScreen from './pages/PortfolioScreen/PortfolioScreen';
import WspButton from './components/WspButton/WspButton';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="appContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioScreen />} />
            <Route path="/BIM" element={<BIM />} />
          </Routes>
        </div>
        <WspButton />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;