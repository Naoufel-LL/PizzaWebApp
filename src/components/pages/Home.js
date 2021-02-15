import Ad from '../Ad';
import Footer from '../Footer';
import HeaderPage from '../HeaderPage';
import Info from '../Info';
import NextHeader from '../NextHeader';
import Pizzas from '../Pizzas';
const Home = () => {
    return (  
        <>
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
        </>
    );
}
 
export default Home;