import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Menu from './components/pages/Menu';
import Contact from './components/pages/Contact';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
      <Route exact path="/"><Home /></Route>
      <Route path="/menu"><Menu /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/shop"><Shop /></Route>
      <Route path="/contact"><Contact /></Route>
      </Router>
    </div>
  );
}

export default App;
