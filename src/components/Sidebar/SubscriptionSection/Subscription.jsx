import React from 'react'
import './Subscription.css'
import { ChevronRight } from 'lucide-react'
import mrbeast from '../../../assets/mrbeast.jpg'
import tseries from '../../../assets/Tseries.jpg'
import pewdiepie from '../../../assets/pewdiepie.jpg'
import justinbieber from '../../../assets/justinBieber.jpg'

const Subscription = () => {
    return (
        <div className="subs big">
            <span>Subscriptions <ChevronRight size={16} /></span>
            <div className="side-link">
                <img src={mrbeast} alt="" /><p>MrBeast</p>
            </div>
            <div className="side-link">
                <img src={tseries} alt="" /><p>T-Series</p>
            </div>
            <div className="side-link">
                <img src={pewdiepie} alt="" /><p>PewDiePie</p>
            </div>
            <div className="side-link">
                <img src={justinbieber} alt="" /><p>Justin Bieber</p>
            </div>

        </div>
    )
}

export default Subscription
