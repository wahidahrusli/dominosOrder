import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Domino's Pizza</Link>

                <ul className='right'>
                    <li><Link to="/">Pizza</Link></li>
                    <li><Link to="/side">Side</Link></li>
                    <li><Link to="/beverage">Beverage</Link></li>
                    <li><Link to="/cart"><Icon name="shopping cart" size="large"></Icon> </Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar