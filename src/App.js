import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import CarouselLanding from './components/CarouselLanding/CarouselLanding';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselLanding/>
    </div>
  );
}

export default App;
