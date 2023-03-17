import React, { useState } from 'react';
import { FaFacebookSquare , FaInstagramSquare , FaYoutubeSquare  } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import "./navbar.css";


const Navbar = () => {
    const [showMediaIcons , setShowMediaIcons] = useState(false);
    return (
        <>
           <nav className="main-nav">
              <div className="logo">
                  <h2>
                    <span>H</span>arsh
                    <span>V</span>ardhan
                    </h2>
              </div>



            <div className={showMediaIcons ?   "menu-link mobile-menu-link" : "menu-link" }>
               <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Follow us</a>
                </li>
               </ul>
            </div>


                    <div className="social-media">
                        <ul className="social-media-desktop">
                            <li>
                                <a href="#" target="_thapa">
                                     <FaFacebookSquare classname="facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_thapa">
                                     <FaInstagramSquare className="instagram"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_thapa">
                                     <FaYoutubeSquare className="youtube"/>
                                </a>
                            </li>
                        </ul>
                    

                    {/* hamburger sect */}
                    <div className="hamburger-menu">
                        <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}>
                           <GiHamburgerMenu />
                        </a>

                    </div>
                    </div>

            </nav>



             {/* hero sec*/}
            <section className="hero-section">
                <p>Welcome to</p>
                <h1>Harsh Tech</h1>

            </section>

        </>
    );
};

export default Navbar;