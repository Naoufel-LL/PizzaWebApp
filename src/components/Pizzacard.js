import '../App.css'
const Pizzacard = ({img,title}) => {
    return (
       <div className="pizza-card">
           <div className="pizza-card-imgbox">
            <img src={img}></img>
           </div>
        <div className="pizza-text">
        <h1>{title}</h1>
           <p>Leverage agile frameworks to prov
               ide a robust synopsis for high</p>
           <a href="/"><h1>Read More </h1></a>
        </div>
       </div>
      );
}
 
export default Pizzacard;