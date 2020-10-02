import React from 'react';
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/qr_code-256.png" width="30" height="30" alt="" loading="lazy" style={{background: 'white'}} />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={`nav-item `+(pathname === '/' ? 'active' : '')}>
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className={`nav-item `+(pathname === '/history' ? 'active' : '')}>
                        <Link className="nav-link" to="/history">
                            History
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
