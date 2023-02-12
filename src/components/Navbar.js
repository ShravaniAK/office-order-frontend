import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="left">

        </div>
        <div className="right">
        <ul>
           <li> <Link to="/Home">HOME</Link></li>
           <li><Link to="/AllOrders">All orders</Link></li> 
        </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar