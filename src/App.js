import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Menu from './components/pages/Menu';
import About from './components/pages/About';
function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
      <Route exact path="/"><Home /></Route>
      <Route path="/menu"><Menu /></Route>
      <Route path="/about"><About /></Route>
      </Router>
    </div>
  );
}

export default App;
