import '../App.css'
const Pizza = ({img,title,prix}) => {
    return (
        <div className="pizza-box">
            <img src={img}></img>
            <h3>{title}</h3>
            <p>
            Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at ero
            s sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.
            </p>
            <h1>{prix}</h1>
        </div>
      );
}
 
export default Pizza;