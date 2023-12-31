import React from 'react'
import logo from '../Components/logo.png'
import {Link} from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="logo" />
        <div >
            <Link to="/tvshows"> TV Shows</Link>
            <Link to="/movies"> Movies</Link>
            <Link to="/recent"> Recent</Link>
            <Link to="/mylist"> My List</Link>
        </div>
        <AiOutlineSearch/>
    </nav>
  )
}

export default Header