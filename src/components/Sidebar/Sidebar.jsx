import React, { useState } from 'react'
import './Sidebar.css'
import HomeSection from './HomeSection/HomeSection'
import Subscription from './SubscriptionSection/Subscription'
import You from './YouSection/You'
import Explore from './ExploreSection/Explore'
import RHistory from './ReportHistorySection/RHistory'
import Footer from './FooterSection/Footer'

const Sidebar = ({ sidebar,category,setCategory }) => {

    const [showMore1, setShowMore1] = useState(false)
    const [showMore2, setShowMore2] = useState(false)

    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="sidebar-content">
                <div className="sidebar-inner">
                    <HomeSection category={category} setCategory={setCategory} />
                    <Subscription />
                    <You showMore={showMore1} setShowMore={setShowMore1} />
                    <Explore showMore={showMore2} setShowMore={setShowMore2} category={category} setCategory={setCategory} />
                    <RHistory />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
