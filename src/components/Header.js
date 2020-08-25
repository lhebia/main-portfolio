import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <header>
            <div>
                <h1>Lawrence Hebia</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;