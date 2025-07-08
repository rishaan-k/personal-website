import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Navigation() {
    const location = useLocation();

    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/work" 
                        className={`nav-link ${location.pathname === '/work' ? 'active' : ''}`}
                    >
                        Work
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation; 