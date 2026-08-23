import React from 'react'
import './HomeSection.css'
import house from '../../../assets/vt-house.svg'
import shorts from '../../../assets/vt-shorts.png'
import user from '../../../assets/vt-user.svg'
import subs from '../../../assets/vt-subs.png'

const HomeSection = (category,setCategory) => {
    return (
        <div className="shortcut-links">
            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={house} alt="" /><p>Home</p>
            </div>
            <div className="side-link" onClick={()=>setCategory(42)}>
                <img src={shorts} alt="" /><p>Shorts</p>
            </div>
            <div className="side-link small-side-link" onClick={()=>setCategory(0)}>
                <img src={subs} alt="" /> <p>Subscriptions</p>
            </div>
            <div className="side-link small-side-link" onClick={()=>setCategory(0)}>
                <img src={user} alt="" /> <p>You</p>
            </div>
        </div>
    )
}

export default HomeSection
