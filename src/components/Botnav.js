import '../App.css'
const Botnav = ({page}) => {
    return (  
        <div className="botnav">
         <div className="botnav-text">
         <h1>{page}</h1>
            <h3><span>Home</span> / {page}</h3>
         </div>
        </div>
    );
}
 
export default Botnav;