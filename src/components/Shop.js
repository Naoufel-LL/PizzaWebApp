import '../App.css'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import pic1 from '../assets/pizza1.png'
import pic2 from '../assets/pizza2.png'
import pic3 from '../assets/pizza3.png'
import pic4 from '../assets/pizza4.png'
import pic5 from '../assets/pizza5.png'
import pic6 from '../assets/pizza6.png'
const Shop = () => {
    return (
        <div className="shop-container">
         <div className="shop-title">
             <Fade>
          <h2>Pizza Menu</h2>
          <h1>WELCOME TO</h1>
          <h1>MAESTRO PIZZINI</h1>
          </Fade>
          </div>
          <div className="shop-pizzas">
              <Zoom cascade>
          <div className="shop-pizza">
          <div className="shop-img"><img src={pic1} /></div>
          <div className="shop-text">
              <h1>Low Carb Pizza</h1>
              <p>Nullam nibh sem, imperdiet ultrices co
                  mmodo a, vulputate vel ligula. Duis venen
                  atis at eros sed egestas. Mauris rutrum quam risus,
                   vel hendrerit dui tempor in.</p>
          </div>
          <div className="shop-prix">
             <h1>$34</h1>
         </div>
          </div>
          <div className="shop-pizza">
          <div className="shop-img"><img src={pic2} /></div>
          <div className="shop-text">
              <h1>Pizza Biscuit Bake</h1>
              <p>Nullam nibh sem, imperdiet ultrices co
                  mmodo a, vulputate vel ligula. Duis venen
                  atis at eros sed egestas. Mauris rutrum quam risus,
                   vel hendrerit dui tempor in.</p>
          </div>
          <div className="shop-prix">
             <h1>$45</h1>
         </div>
          </div>
          <div className="shop-pizza">
          <div className="shop-img"><img src={pic3} /></div>
          <div className="shop-text">
              <h1>Crazy Crust Pizza</h1>
              <p>Nullam nibh sem, imperdiet ultrices co
                  mmodo a, vulputate vel ligula. Duis venen
                  atis at eros sed egestas. Mauris rutrum quam risus,
                   vel hendrerit dui tempor in.</p>
          </div>
          <div className="shop-prix">
             <h1>$39</h1>
         </div>
          </div>
          <div className="shop-pizza">
          <div className="shop-img"><img src={pic4} /></div>
          <div className="shop-text">
              <h1>Beer Pizza Crust</h1>
              <p>Nullam nibh sem, imperdiet ultrices co
                  mmodo a, vulputate vel ligula. Duis venen
                  atis at eros sed egestas. Mauris rutrum quam risus,
                   vel hendrerit dui tempor in.</p>
          </div>
          <div className="shop-prix">
             <h1>$41</h1>
         </div>
          </div>
          <div className="shop-pizza">
          <div className="shop-img"><img src={pic5} /></div>
          <div className="shop-text">
              <h1>Pizza Prosciutto</h1>
              <p>Nullam nibh sem, imperdiet ultrices co
                  mmodo a, vulputate vel ligula. Duis venen
                  atis at eros sed egestas. Mauris rutrum quam risus,
                   vel hendrerit dui tempor in.</p>
          </div>
          <div className="shop-prix">
             <h1>$48</h1>
         </div>
          </div>
          <div className="shop-pizza">
          <div className="shop-img"><img src={pic6} /></div>
          <div className="shop-text">
              <h1>Pizza Margeritta</h1>
              <p>Nullam nibh sem, imperdiet ultrices co
                  mmodo a, vulputate vel ligula. Duis venen
                  atis at eros sed egestas. Mauris rutrum quam risus,
                   vel hendrerit dui tempor in.</p>
          </div>
          <div className="shop-prix">
             <h1>$10</h1>
         </div>
          </div></Zoom></div>
         </div>
          
          );
}
 
export default Shop;