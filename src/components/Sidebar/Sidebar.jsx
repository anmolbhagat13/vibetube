import React, { useState } from 'react'
import './Sidebar.css'
import HomeSection from './HomeSection/HomeSection'
import Subscription from './SubscriptionSection/Subscription'
import You from './YouSection/You'

const Sidebar = ({ sidebar }) => {

    const [showMore, setShowMore] = useState(false)

    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <HomeSection/>
            <Subscription/>
            <You showMore={showMore} setShowMore={setShowMore}/>
        </div>
    )
}

export default Sidebar
