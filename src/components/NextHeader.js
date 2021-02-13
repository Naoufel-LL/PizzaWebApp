import '../App.css'
import Fade from 'react-reveal/Fade'
import img from '../assets/pizza.jpg'
const NextHeader = ({minititle,title,text,reverse}) => {
    return (
        <div className={reverse ? "nextheaderreverse" : "next-container"}>
            <Fade left>
            <div className="textleft">
                <h3>{minititle}</h3>
                <h1>
                    {title}
                </h1>
                <p>
                   {text}
                </p>
                <a href='/'>Read More</a>
            </div>
            </Fade>
            <Fade right>
            <div className="imgright">
                <img src={img} />
            </div></Fade>
            
        </div>
      );
}
 
export default NextHeader;