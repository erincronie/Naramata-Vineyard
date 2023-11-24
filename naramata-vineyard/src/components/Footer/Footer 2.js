import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.scss';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__main-section">
                <div className="footer__title-section">
                    <h3 className="footer__title">Naramata Vineydard B&B</h3>
                </div>

                <div className="footer__list-section">
                    <ul className="footer__list">
                        <li className="footer__item link"><Link to="/ContactUs">Contact Us</Link></li>
                        <li className="footer__item link"><Link to="/FindUs">Find Us</Link></li>
                        <li className="footer__item link"><Link to="/Policy">Policy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer__rights">
                <p>© 2023 by Naramata Vineyard B&B. All rights reserved. </p>
            </div>
        </section>
    )
}

export default Footer