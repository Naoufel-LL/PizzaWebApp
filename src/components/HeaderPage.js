import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Navbar from "./Navbar"
import '../App.css'
const HeaderPage = () => {
    return ( 
        <div className="header-page">
             <Navbar />
             <Fade left cascade>
           <div className="header-container">
                <h2>Pizza Delivery</h2>
                <div className="h1">
                <h1>Maestro</h1>
                <h1>Pazinni</h1></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer t
                ook a galley of type and scrambled it to make a type specimen book.</p>
                <Zoom><a href="/">Delivery Now </a></Zoom>
           </div>
           </Fade>
        </div>
     );
}
 
export default HeaderPage;