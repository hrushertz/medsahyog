import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false); 
 
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible); 
  };
  
  return (
    <div>
      <div className="top-bar">
        <Link to="login-page"><a>Login</a> </Link>
        <Link to="/user-create"><a>Sign Up</a> </Link>
      </div>
      <nav className="navbar">
        <div className="container">
          <motion.a
            className="navbar-brand"
            href="#"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src="https://i.ibb.co/hVm7hVc/medsahyog.png" alt="Logo" />
          </motion.a>
          <ul className="nav-links">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link to="/about-us">About Us</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <a href="#">Services</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <a href="#">Department</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <a href="#">Blogs</a>
            </motion.li>
          </ul>
          <div className="search">
            {isSearchVisible ? (
              <motion.input
                type="text"
                placeholder="Search"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
            ) : (
              <motion.img
                src="https://i.ibb.co/rHpLKF0/search-interface-symbol.png"
                alt="Search"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={toggleSearch}
              />
            )}
            <div className="buttons">
              <motion.button
                className="buttons button2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Let's connect
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
