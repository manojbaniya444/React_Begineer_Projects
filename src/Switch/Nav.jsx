import React from 'react';
import { Link } from 'react-router-dom';
const Nav =() =>
{
    return(
        <div className='navbar'>
            <Link to='/'> <h3>Home</h3></Link>
            <ul>
                <Link to="about">
                    <li>About us</li>
                </Link>

                <Link to="shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav;
