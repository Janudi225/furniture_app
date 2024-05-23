import React,{useState} from 'react';
import './Navbar.css';


export const Navbar = () => {
    const [menuOpen, setMenuOpen]=useState(false)

  return (
    <nav>
        
        <li id='title'>FurniShop</li>
        
        <div className='menu' 
        onClick={() => {
            setMenuOpen(!menuOpen);
        }}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul 
        className={menuOpen ? 'open' : ''}
        >
            <li><b>Home</b></li>
            <li>About</li>
            <li>Features</li>
            <li>Contacts</li>
        </ul>
    </nav>
  )
}
