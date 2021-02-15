import Navbar from "../Navbar"
import Footer from '../Footer'
import Botnav from "../Botnav"
import user1 from "./images/user-1.png"
import user2 from "./images/user-2.png"
import user3 from "./images/user-3.png"
import NextHeader from "../NextHeader"
import Pizzacard from "../Pizzacard"
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'
import img from './images/img1.jpg'
import img1 from './images/pizza4.jpg'
import Persons from "../Persons"
const About = () => {
    return ( 
        <>
        <Navbar black/>
        <Botnav page="About us" />
        <NextHeader
       minititle ="The Pizza Menu       "
       title="CHICAGO
       THIN CRUST"
       text=" Investigationes demonstraverunt lectores legere me lius
       quod ii legunt saepius. Claritas est etiam processus dynaus,
       quise sequitur mutationem consuetudium lectorum.
    " 
      />
      
      <div className="about-container">
          <Flip>
          <Pizzacard
           title="RESTAURANT EVENT NIGHT"
           img={img}
          /></Flip>
          <Flip>
              <Pizzacard
           title="PIZZA DELIVERY MENU NIGHT"
           img={img1}
          /> </Flip>
          <Fade right>   
          <div className="righttext">
              <h3>The News</h3>
              <h1>Our</h1>
              <h1>Promotions</h1>
              <p>Investigationes demonstraverunt
                   lectores legere me lius quod ii legunt saepius est etiam
                   processus dynaus.</p>
            <a href="/">View More</a>
          </div>
          </Fade>
      </div>
        <Persons
         customer
         name1="Carla Smith"
         name2="Son Patrik"
         name3="Adiana Winter"
         emojis1="👩"
         emojis2="🧑"
         emojis3="👩"
         person1={user1}
         person2={user2}
         person3={user3}
        />
        <Footer />
        </>
     );
}
 
export default About;