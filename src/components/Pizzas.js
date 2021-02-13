import Pizza from "./Pizza"
import pic1 from '../assets/pizza1.png'
import pic2 from '../assets/pizza2.png'
import pic3 from '../assets/pizza3.png'
import pic4 from '../assets/pizza4.png'
import pic5 from '../assets/pizza5.png'
import pic6 from '../assets/pizza6.png'
import Bounce from 'react-reveal/Bounce';
const Pizzas = () => {
    return (  
        <div className="pizzas-container">
            <Bounce>
            <Pizza 
              title='Pizza Margeritta'
              prix="$39"
              img={pic1}
            />
             <Pizza 
              title='Beer Pizza Crust              '
              prix="$25"
              img={pic2}
            />
             <Pizza 
              title='Pizza Biscuit Bake              '
              prix="$49"
              img={pic3}
            />
             <Pizza 
              title='Pizza Prosciutto              '
              prix="$25"
              img={pic4}
            />
             <Pizza 
              title='Crazy Crust Pizza '
              prix="$29"
              img={pic5}
            />
             <Pizza 
              title='Low Carb Pizza              '
              prix="$49"
              img={pic6}
            />
            </Bounce>
        </div>
    );
}
 
export default Pizzas;