import React from "react";
import Pic from './image/bake.png';
import './navbar.css'

const Navbar = () => {
    return ( 
        <>
        <nav>
        <img src={Pic} alt="bake" className="logo" width="120px" height="60px"/>
        <ul>
        <li><a href="/home">Home <span></span></a></li>  
        <li><a href="/contact">Contact <span></span></a></li>
        <li><a href="/services">Login <span></span></a></li>
        <li><a href="/createuser">Signup <span></span></a></li>

        </ul>
        </nav>
        </>
     );
}
 
export default Navbar;
