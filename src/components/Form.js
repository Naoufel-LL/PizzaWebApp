import '../App.css'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
const Form = () => {
    return ( 
      <div className="form">
          <div className="form-title">
            <Fade>
              <h3>Take a Message 📢</h3>
              <h1>WE CARE ABOUT</h1>
              <h1>YOUR OPINION</h1>
              </Fade>
          </div>
          <div className="form-container">
            <Zoom cascade>
            <input type='text' max="10" min="4" placeholder="First Name" required />
            <input type='text' max="15" min="4" placeholder="Last Name" required/>
            <input type='text' max="15" min="4" placeholder="Subject" required/>
            <textarea placeholder="Your Message" min="10" required></textarea>
            <a href="">Send Message 💌</a></Zoom>
          </div>
      </div>

     );
}
 
export default Form;