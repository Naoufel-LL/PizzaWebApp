import '../App.css'
import Zoom from 'react-reveal/Zoom'
const Ad = () => {
    return (  
        <div className="ad-container">
            <div className="overlay"></div>
            <Zoom cascade>
             <div className="ad-center">
                 <h3>Free Delivery With</h3>
                 <h1>PIZZA OF THE DAY</h1>
                 <h3>Only 8.99 USD</h3><br></br>
                 <a href="/">Call Now</a>
             </div>
             </Zoom>
        </div>
    );
}
 
export default Ad;