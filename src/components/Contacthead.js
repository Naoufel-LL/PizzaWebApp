import '../App.css'
import pic from '../assets/map.PNG'
import Slide from 'react-reveal/Slide'
const Contacthead = () => {
    return ( 
        <div className="contacthead-container">
                            <Slide left cascade>
            <div className="leftside">
                <h2>Contact Us</h2>
                <h1>WE WOULD</h1>
                <h1>lOVE</h1>
                <h1>TO WORK WITH</h1>
                <h1>YOU</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                 a galley of type and scrambled it to make a type specimen book.</p>
                 <h3>Monday to Saturday:<span>9.00 am to 9.00 pm</span></h3>
                    <h3>Sunday:<span>10.00 am to 6.00 pm</span></h3>
     
            </div>
            </Slide>
            <Slide right>
            <div className="mapright">
                <img src={pic} />
            </div>
            </Slide>
        </div>
     );
}
 
export default Contacthead;