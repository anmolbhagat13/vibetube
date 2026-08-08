import React, { useState } from 'react'
import './Sidebar.css'

import HomeSection from './HomeSection/HomeSection'
import Subscription from './SubscriptionSection/Subscription'

const Sidebar = ({ sidebar }) => {

    const [showMore, setShowMore] = useState(false)

    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <HomeSection/>
            <Subscription/>
        </div>
    )
}

export default Sidebar
