import React from 'react';
import './Header.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";



function Header () { 
       return (
            <nav className="navbar nav">
            <Link to="/" >
                <h1>TIENDA KPIS</h1>
            </Link>
                <div className="links">
                    <ul>
                        <Link to="/shop" className="nav__item">SHOP</Link>
                        <Link to="/about" className="nav__item">ABOUT</Link>
                        <Link to="/contact" className="nav__item">CONTACT</Link>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        )
    }

export default Header;


