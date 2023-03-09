import { useState } from "react"
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import datalogo from '../images/datalogo.png'
import { Link } from "react-router-dom"

export default function Navbar() {


    const [burger, setBurger ] = useState('')
    function isOpen() {
        if (burger == '') {
            setBurger('activeBurger')
        }else {
            setBurger('')
        }
    }

    return (
        <nav className='con'>
            <Link to='/'><img src={datalogo} alt="" /></Link>
            <HiOutlineMenuAlt1 className='navMenuBtn' size={'36px'} onClick={isOpen} />
            <ul className={burger}>
                <Link to='/About'><li>About Us</li></Link>
                <Link to='/services'><li>Service</li></Link>
                <Link to='/portfolio'><li>Portfolio</li></Link>
                <Link to='/faq'><li>FAQ's</li></Link>
                <Link to='/contact'><button>Contact Us</button></Link>
            </ul>
        </nav>
    )
}