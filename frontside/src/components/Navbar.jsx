import React from "react";
import { Link} from "react-router-dom";
import './navbar.css';


// import React, { useState } from 'react'
// import { Link, useNavigate } from "react-router-dom";
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { useCart } from './ContextReducer';
// import Modal from '../Modal';
// import Cart from '../screens/Cart';

const Navbar = ({ isDarkMode }) => {
    return ( 
        <>

        <nav className="navbar navbar-expand-lg navbar-dark  position-sticky" >
                <div className="container-fluid">
                    {/* <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link> */}
                    <img src="https://dynamic.brandcrowd.com/preview/logodraft/bcd3caec-00d6-418a-b7b6-6ba755e22a97/image/large.png" alt="bake" className="logo" width="120px" height="60px"/>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 pr-3 mx-5 active" aria-current="page" to="/">Home<span></span></Link>
                            </li>
                            {(localStorage.getItem("token")) ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/myOrder" >My Orders</Link>  {/* index.css - nav-link color white */}
                                </li> : ""}
                        </ul>
                        {(!localStorage.getItem("token")) ?
                            <form className="d-flex">
                                <Link className="btn bg-white text-success mx-1 " to="/login" id="btns"
                              >Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
                            </form> :
                            <div>
                               <div className="btn bg-white text-success mx-2">
                                My Cart
                               </div>

                            <div className="btn bg-white text-success mx-2 ">
                              Logout
                            </div>

                            </div>
                           
                            
                            }
                            <div>

                            </div>
                    </div>
                </div>
            </nav>


      <style>
  {`
    nav ul li Link {
      color: ${isDarkMode ? 'black' : 'white'};
      transition: color 0.3s ease; // Add a smooth transition effect
    }
  `}
</style>
   
        </>
     );
}
 
export default Navbar;






            
      
