import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.scss';

const Header = () => {
    return(
   <nav className="nav">
    <div className="nav__title-section">
        <Link to="/">
            <h2 className="nav__title">Naramata Vineyard</h2>
        </Link>
        <h3 className='nav__secondary-title'>B&B</h3>
    </div>

    <div className="nav__list-section">
        <ul className="nav__list">
            <li className="nav__item link"><Link to="/">Home</Link></li>
            <li className="nav__item link"><Link to="/TheSuite">The Suite</Link></li>
            <li className="nav__item link"><Link to="/Gallery">Gallery</Link></li>
            <li className="nav__item link"><Link to="/Hosts">Meet the Hosts</Link></li>
            <li className="nav__item link"><Link to="/BookNow">Book Now</Link></li>
        </ul>
    </div>
   </nav>
)
}

export default Header