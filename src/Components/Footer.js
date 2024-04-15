import {FaYoutube, FaFacebook, FaTwitter, FaGoogle, FaGooglePlay,FaLinkedin} from "react-icons/fa"
import footerStyle from "./Footer.module.css"
import { Link } from "react-router-dom"


export const Footer=()=>{

    return (
        <div>
          <footer className="footer">
      <div className="footer-content">
        <div className="sitemap">
          <h3>Sitemap</h3>
          
          <ul>
          <Link to='/'><li> Home</li></Link>
          <Link to='/about-us'> <li> About Us</li></Link>
           <Link to='/services'><li> Services </li></Link>
         
          <li><a href="#">Department</a></li>
          <li><a href="#">Blogs</a></li> 
          </ul>
        </div>
        <div className="footer-description">
          <h3>Why We're Committed</h3>
          <p className="wwc">
            We revolutionize healthcare accessibility, empowering patients with instant information and reducing the stress of navigating multiple sources.
          </p>
        </div>
        <div className="search-bar">
          {/* Add your search bar component here */}
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="social-icons">
          {/* Add your social media icons here */}
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
        </div>
    )

}

export default Footer;