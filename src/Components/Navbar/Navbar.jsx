import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <nav className='navbar'>
      <div className='shop-link'>
        <Link to='/' className='link'>
          Shop
        </Link>
        <Link to='/cart' className='link'>
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </nav>
  )
}
export default Navbar;