import '../App.css'
import Zoom from 'react-reveal/Zoom'
const Persons = ({name1,name2,name3,customer,emojis1,emojis2,emojis3,person1,person2,person3}) => {
    return ( 
        <div className="customers">
        <Zoom cascade>
    <div className="customers-container">
        <div  className="box">
            <h1>{emojis1}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti nesciunt ducimus rerum eos s
                it corrupti officia mollitia, eum libero.
            </p>
            {customer ? <h3>⭐⭐⭐⭐⭐</h3> : <h3>🏆🏆🏆🏆</h3>}
            <div className="imgbox">
                <img src={person1} alt="" />
            </div>
            <h3>{name1} {customer ? <span>✅</span>:<span>🔪</span>}</h3>
        </div>
        <div   className="box">
            <h1>{emojis2}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti nesciunt ducimus rerum eos s
                it corrupti officia mollitia, eum libero.
            </p>
            {customer ? <h3>⭐⭐⭐⭐⭐</h3> : <h3>🏆🏆🏆🏆</h3>}
            <div className="imgbox">
                <img src={person2} alt=""/>
            </div>
            <h3>{name2} {customer ? <span>✅</span>:<span>🔪</span>}</h3>
        </div>
        <div   class="box">
            <h1>{emojis3}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti nesciunt ducimus rerum eos s
                it corrupti officia mollitia, eum libero.
            </p>
            {customer ? <h3>⭐⭐⭐⭐⭐</h3> : <h3>🏆🏆🏆🏆</h3>}
            <div className="imgbox">
                <img src={person3} alt=""/>
            </div>
            <h3>{name3} {customer ? <span>✅</span>:<span>🔪</span>}</h3>
        </div>
    </div>
    </Zoom>
</div> 
     );
}
 
export default Persons;