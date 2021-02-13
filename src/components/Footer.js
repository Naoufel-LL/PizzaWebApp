import '../App.css'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce';

const Footer = () => {
    return (  
        <div className="footer">
                    <Zoom cascade>
            <div className="row">
                <div className="col-2">
                  <h1>About us</h1>
                  <p>Investigationes demonstraverunt lectores legere me 
                      lius quod ii legunt saepius. Eodem modo typi, qui nunc nobis videntur. I
                      nvestigationes demonstraverunt lectores legere me lius
                       quod ii legunt saepius. Investigationes demonstraverunt lectores.</p>
                    <h3>Monday to Saturday:<span>9.00 am to 9.00 pm</span></h3>
                    <h3>Sunday:<span>10.00 am to 6.00 pm</span></h3>
                </div>
                <div className="col">
                    <h3>Quick Links</h3>
                    <p>Need Help ?</p>
                    <p>Our Latest</p>
                    <p>About us page</p>
                    <p>Fast delivery</p>
                </div>
                <div className="col">
                    <h3>Recepies</h3>
                    <p><span>></span>Pizza Biscuit Bake</p>
                    <p><span>></span>Pizza Margeritta</p>
                    <p><span>></span>Pizza Prosciutto</p>
                    <p><span>></span>Pizza Low Carb</p>
                </div>
                <div className="col">
                    <h3>Contact us</h3>
                    <p>📞 (+40) 74 0920 2288</p>
                    <p>✉ office@example.com</p>
                    <p>📍 New York 11673</p>
                    <div className="social"
                    >
                    <svg enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m21 0h-18c-1.655 0-3 1.345-3 3v18c0 1.654 1.345 3 3 3h18c1.654 0 3-1.346 3-3v-18c0-1.655-1.346-3-3-3z" fill="#3b5999"/><path d="m16.5 12v-3c0-.828.672-.75 1.5-.75h1.5v-3.75h-3c-2.486 0-4.5 2.014-4.5 4.5v3h-3v3.75h3v8.25h4.5v-8.25h2.25l1.5-3.75z" fill="#fff"/></svg>
                    <svg enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m21.552 7.749c0-.217-.008-.428-.018-.636.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.752.206-1.678.198-2.221.078.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 9.054 0 14.004-7.5 14.004-14.001z" fill="#55acee"/></svg>
                    <svg enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m23 12c0 .75-.42 1.41-1.03 1.75l-5.2 2.89-4.4-4.64 4.4-4.64 5.2 2.89c.61.34 1.03 1 1.03 1.75z" fill="#ffc107"/><path d="m12.37 12-10.8 11.39c-.36-.36-.57-.85-.57-1.39v-20c0-.54.21-1.03.57-1.39z" fill="#03a9f4"/><path d="m12.37 12 4.4 4.64c-13.173 7.225-13.725 8.307-15.2 6.75z" fill="#f44336"/><path d="m16.77 7.36-4.4 4.64-10.8-11.39c.618-.653 1.609-.796 2.4-.36z" fill="#4caf50"/></svg>
                    </div>
                </div>
            </div>
            <hr></hr></Zoom>
            <Bounce>
            <div className="copyright">©2021 NaoufelBahassoune 👨‍💻</div></Bounce>
        </div>
    );
}
 
export default Footer;