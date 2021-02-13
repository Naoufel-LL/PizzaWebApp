import Countup from 'react-countup'
import Fade from 'react-reveal/Fade'
import '../App.css'
const Info = () => {
    return ( 
        <div className="info-container">
            <Fade>
            <div className="box">
                <h1><Countup start={0} duration={50} end={120}></Countup></h1>
                <h3>Awsome Employees</h3>
            </div>
            <div className="box">
                <h1><Countup start={0} duration={50} end={58}></Countup></h1>
                <h3>Pizza Types</h3>
            </div>
            <div className="box">
                <h1><Countup start={0} duration={50} end={1468}></Countup></h1>
                <h3>Satisfied Clients</h3>
            </div>
            <div className="box">
                <h1><Countup start={0} duration={50} end={2031}></Countup></h1>
                <h3>Delivery</h3>
            </div>
            </Fade>
        </div>
     );
}
 
export default Info;