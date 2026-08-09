import React from 'react'
import './RHistory.css'
import rphistory from '../../../assets/vt-rphistory.png'
const RHistory = () => {
    return (
        <div className='rphistory'>
            <div className="side-link">
                <img src={rphistory} alt="" /><p>Report history</p>
            </div>
        </div>
    )
}

export default RHistory
