import Botnav from "../Botnav"
import Navbar from "../Navbar"
import Shop from "../Shop"
import Pizzas from  '../Pizzas'
import Footer from '../Footer'
const Menu = () => {
    return (
        <>
        <Navbar black/>
        <Botnav page="Menu" />
        <Shop />
        <Pizzas />
        <Footer />
        </>
      );
}
 
export default Menu;