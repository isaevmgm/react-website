import React, { useState } from 'react'
import '../components/Navbar.css'

function Navbar(props) {
    const [active, setActive] = useState('nav_menu')
    const [changeToggler, setChangeToggler] = useState('nav_toggler')

    const handleToggler = () => {
        active === 'nav_menu'
        ? setActive('nav_menu nav_active')
        : setActive('nav_menu')

        changeToggler === 'nav_toggler'
        ? setChangeToggler('nav_toggler toggle')
        : setChangeToggler('nav_toggler')
    }

  return (
    <nav>
        <a href='#' className='nav_brand'>TRVL</a>
        <ul className={active}>
            <li className='nav_item'>
                <a href='#' className='nav_link'>Home</a>
            </li>
            <li className='nav_item'>
                <a href='#' className='nav_link'>Services</a>
            </li>
            <li className='nav_item'>
                <a href='#' className='nav_link'>Products</a>
            </li>
            <li className='nav_item'>
                <a href='#' className='nav_link sign_up'><span>SIGN UP</span></a>
            </li>
        </ul>
        <div onClick={handleToggler} className={changeToggler}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
    </nav>
  )
}

export default Navbar
