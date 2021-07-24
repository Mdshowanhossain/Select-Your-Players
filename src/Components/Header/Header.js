import React from 'react';
import Headers from './Headers.css';

const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <p>Navbar</p>
            </div>
            <div className="right">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Review</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;