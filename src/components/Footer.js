
import "./navbar.css";
import { FaYoutube,FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <h3>  Naya Inquilab Subcribe Our channel  </h3>
                <a className="footer-youtube "  href='https://www.youtube.com/@nayainquilabtvnews1854'
                    target='_new'><FaYoutube /> Subcribe Now</a>
                     <div className='social-media-mobile'>
                    <ul>
                        <li>
                            <a href='https://www.facebook.com/Nayainquilabtvnews.fb?mibextid=D4KYlr'
                                target='_new'><FaFacebookF className="facebook" /></a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/@nayainquilabtvnews1854'
                                target='_new'><FaInstagram className="insta" /></a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/@nayainquilabtvnews1854'
                                target='_new'><FaYoutube className="youtube " /></a>
                        </li>
                    </ul>
                    </div>    
            </div>
           
        </>

    ); 
};

export default Footer;






