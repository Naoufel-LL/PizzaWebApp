import Navbar from '../Navbar'
import Botnav from '../Botnav'
import user1 from "./images/expert2.png"
import user2 from "./images/expert3.png"
import user3 from "./images/expert4.png"
import Contacthead from '../Contacthead'
import Form from '../Form'
import Persons from '../Persons'
import Footer from '../Footer'
const Contact = () => {
    return (
       <>
       <Navbar black/>
      <Botnav page="Contact"/>
      <Contacthead />
      <Form />
      <div style={{
          textAlign:"center",
          padding: ' 3% 5%',
      }}>
          <h1>Our Chefs 👩‍🍳👨‍🍳🍕</h1>
      </div>
      <Persons
         name1="Chef Smith"
         name2="Chef Loran"
         name3="Chef Steve"
         emojis1="👨‍🍳"
         emojis2="👩‍🍳"
         emojis3="👨‍🍳"
         person1={user1}
         person2={user2}
         person3={user3}
        />
        <Footer />
       </>
      );
}
 
export default Contact;