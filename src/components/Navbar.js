import '../App.css'
import logo from '../assets/logo.png'
import logo1 from '../assets/logo1.png'
import {NavLink,Link} from 'react-router-dom'
const Navbar = ({black}) => {
    return ( 
        <nav className={black ? 'pad' : null}>
            <div className="logo">
                <Link to='/'><img src={ black ? logo1 : logo } /></Link>
            </div>
            <ul>
                <li><NavLink className={black ? 'red' : null} exact to="/">Home</NavLink></li>
                <li><NavLink className={black ? 'red' : null} to="/menu">Menu</NavLink></li>
                <li><NavLink className={black ? 'red' : null} to="/about">About Us</NavLink></li>
                <li><NavLink className={black ? 'red' : null} to="/shop">Shop</NavLink></li>
                <li><NavLink className={black ? 'red' : null}  to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;