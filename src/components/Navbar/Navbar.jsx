import React from 'react'
import './Navbar.css'
import { Menu } from 'lucide-react'
import { Search } from 'lucide-react'
import { Mic } from 'lucide-react'
import { Plus } from 'lucide-react'
import { Bell } from 'lucide-react'
import Icon from '../../assets/vt-icon.png'
import Vtwhite from '../../assets/vt-white.png'
import Profile from '../../assets/profile.png'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-left">
                <button className='menu-btn'><Menu size={23} /></button>
                <div className="vt-icon">
                    <img className='icon-img' src={Icon} alt="" />
                    <img src={Vtwhite} alt="" />
                </div>
            </div>
            <div className="nav-mid">
                <div className="search">
                    <input type="text" placeholder='Search' />
                    <button className='search-btn'><Search /></button>
                </div>
                <button className='mic-btn'><Mic /></button>
            </div>
            <div className="nav-right">
                <div className="create">
                    <Plus />
                    <p>Create</p>
                </div>
                <button className='bell-btn'><Bell /></button>
                <div className="profile">
                    <img src={Profile} alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
