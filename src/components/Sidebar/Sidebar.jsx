import React, { useState } from 'react'
import './Sidebar.css'
import HomeSection from './HomeSection/HomeSection'
import Subscription from './SubscriptionSection/Subscription'
import You from './YouSection/You'
import Explore from './ExploreSection/Explore'
import RHistory from './ReportHistorySection/RHistory'
import Footer from './FooterSection/Footer'

const Sidebar = ({ sidebar }) => {

    const [showMore, setShowMore] = useState(false)

    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <HomeSection/>
            <Subscription/>
            <You showMore={showMore} setShowMore={setShowMore}/>
            <Explore showMore={showMore} setShowMore={setShowMore}/>
            <RHistory/>
            <Footer/>
        </div>
    )
}

export default Sidebar
