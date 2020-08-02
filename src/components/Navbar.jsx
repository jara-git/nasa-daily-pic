import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className = 'Navbar'>
            <ul>
                <Link to= '/'>Take me to Home page </Link>
            </ul>
        </div>
    )
}

export default Navbar;