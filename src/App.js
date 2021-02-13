import './App.css';
import Ad from './components/Ad';
import Footer from './components/Footer';
import HeaderPage from './components/HeaderPage';
import Info from './components/Info';
import NextHeader from './components/NextHeader';
import Pizzas from './components/Pizzas';

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <NextHeader
       minititle ="About us"
       title="Welcome To 
       Maestro Pizzini"
       text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
        to make a type specimen book." 
      />
      <Ad />
      <NextHeader
       minititle ="The Pizza Menu"
       title="CHICAGO
       THIN CRUST"
       text="Investigationes demonstraverunt lectores legere me lius
       quod ii legunt saepius. Claritas est etiam processus dynaus,
       quise sequitur mutationem consuetudium lectorum.
       " 
       reverse
      />
      <Info />
      <Pizzas />
      <Footer />
    </div>
  );
}

export default App;
