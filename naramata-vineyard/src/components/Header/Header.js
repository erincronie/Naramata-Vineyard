import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/Header/Header.scss'

const Header = () => {
    return(
   <nav className="nav">
        <h2 className="nav-title">Naramata Vineyard</h2>

        <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">Gallery</Link></li>
            <li className="nav-item"><Link to="/contact">Meet the Hosts</Link></li>
        </ul>
   </nav>
)
}

export default Header