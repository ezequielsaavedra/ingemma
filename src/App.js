import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Portfolio from './pages/Portfolio/Portfolio';
import WspButton from './components/WspButton/WspButton';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <Portfolio/>
      <WspButton />
      <Footer/>
    </div>
  );
}

export default App;
