import '../App.css'
import logo from '../assets/logo.png'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <img src={logo} />
            </div>
            <ul>
                <li><a className="active" href="/">Home</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Shop</a></li>
                <li><a href="/">News</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;