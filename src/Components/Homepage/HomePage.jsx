import React, { useEffect } from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import './HomePage.css'; 
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';


export const HomePage = () => {
    const handleClick = (tileNumber) => {
//do the fucntion
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Navbar/>
            <div className="bg-container">
      <motion.section
        className="bg-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1, ease: "easeInOut" }} // Use easeInOut for smoother animation
      >
        <img
          src="https://i.ibb.co/VHx0rNQ/image-removebg-preview-2.png"
          alt="Image 1"
          className="ci"
        />
        <div className="text-container">
        <motion.h1
  initial={{ opacity: 0 }} // Remove y-offset
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }} // Adjust duration and ease
>
  <span>HEALTHCARE SOLUTIONS THAT SIMPLIFY THE PRACTICE OF CARE</span>
</motion.h1>


          <motion.button
            className="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
          <Link to="/about-us"> 
            About Us
            </Link>
          </motion.button>
        </div>
      </motion.section>
    </div>
    <section className="specialties-section">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        <span className='wedlovetohelp'>We'd love to help.</span> What are you looking for?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
      >
        <motion.button
          className='specialties-button'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Primary Care
        </motion.button>
        <motion.button
          className='specialties-button'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Urgent Care
        </motion.button>
        <motion.button
          className='specialties-button'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Surgical Specialties
        </motion.button>
        <motion.button
          className='specialties-button'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Doctors
        </motion.button>
      </motion.div>
    </section>
                
            
   <section className="quote-section">
      <div className="quote-container">
        <hr className="hl"></hr>
        <motion.blockquote
          className="quote-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          Medsahyog combines software and services that
          <span className="dm"> ease administration complexity</span> and improve
          <span className="dm"> overall performance</span>
        </motion.blockquote>
      </div>
      <motion.div
        className="slideable-tiles"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      >
        <motion.div
          className="tile"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleClick(1)}
        >
          CARDIOLOGY
        </motion.div>
        <motion.div
          className="tile"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleClick(2)}
        >
          NEUROLOGY
        </motion.div>
        <motion.div
          className="tile"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleClick(3)}
        >
          ONCOLOGY
        </motion.div>
        <motion.div
          className="tile"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleClick(1)}
        >
          ORTHOPEDICS
        </motion.div>
        <motion.div
          className="tile"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleClick(2)}
        >
          PEDIATRICS
        </motion.div>
        <motion.div
          className="tile"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleClick(3)}
        >
          GYNECOLOGY
        </motion.div>
        <motion.div
          className="tile"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleClick(1)}
        >
          DERMATOLOGY
        </motion.div>
        <motion.div
          className="tile"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleClick(2)}
        >
          OPHTHALMOLOGY
        </motion.div>
        <motion.div
          className="tile"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleClick(3)}
        >
          UROLOGY
        </motion.div>
      </motion.div>
    </section>
    <section className="image-slider">
      <Slider {...settings}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src="https://i.ibb.co/CKy2Xwf/docphone.png" alt="Image 1" style={{ width: '946px', height: '500px' }} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src="https://i.ibb.co/h1kSXHP/doclaptop.png" alt="Image 2" style={{ width: '946px', height: '500px' }} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src="https://i.ibb.co/d40FZmB/docheart.png" alt="Image 3" style={{ width: '946px', height: '500px' }} />
        </motion.div>
      </Slider>
    </section>
           <hr className="hl"></hr>
            <section className="image-with-quote">
    <div className="image-container">
        <img src="https://i.ibb.co/59zy8TV/athena-one-center-image-1.png" alt="Image" style={{ width: 'auto', height: '800px' }}/>
        <hr className="hr2"></hr>
    </div>
    <div className="quote-container">
        <h2>The modern solution that scales as you grow</h2>
        <p className="mdsl">From small practices to complex healthcare organizations, Medsahyog is an integrated practice solution that supports the goals of today and scales with you to the goals of tomorrow.</p>
        <button className="medbutton">Explore Medsahyog</button>
    </div>
</section>
<img src="https://i.ibb.co/HpS8xn1/footer-flow.png"style={{ width: '100%'}}/>
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
    );
}

export default HomePage;
