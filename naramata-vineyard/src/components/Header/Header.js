import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return(
   <nav className="nav">
    <div className="nav__title-section">
        <h2 className="nav__title">Naramata Vineyard</h2>
        <h3 className='nav__secondary-title'>B&B</h3>
    </div>

    <div className="nav__list-section">
        <ul className="nav__list">
            <li className="nav__item link"><Link to="/">Home</Link></li>
            <li className="nav__item link"><Link to="/gallery">Gallery</Link></li>
            <li className="nav__item link"><Link to="/hosts">Meet the Hosts</Link></li>
            <li className="nav__item link"><Link to="/booknow">Book Now</Link></li>

        </ul>
    </div>
   </nav>
)
}

export default Header