import React from 'react'
import './HomeSection.css'
import house from '../../../assets/vt-house.svg'
import shorts from '../../../assets/vt-shorts.png'
import user from '../../../assets/vt-user.svg'
import subs from '../../../assets/vt-subs.png'

const HomeSection = () => {
    return (
        <div className="shortcut-links">
            <div className="side-link">
                <img src={house} alt="" /><p>Home</p>
            </div>
            <div className="side-link">
                <img src={shorts} alt="" /><p>Shorts</p>
            </div>
            <div className="side-link small-side-link">
                <img src={subs} alt="" /> <p>Subscriptions</p>
            </div>
            <div className="side-link small-side-link">
                <img src={user} alt="" /> <p>You</p>
            </div>
        </div>
    )
}

export default HomeSection
