import React, { useState } from 'react'
import './Sidebar.css'
import { ChevronRight } from 'lucide-react'
import HomeSection from './HomeSection/HomeSection'

const Sidebar = ({ sidebar }) => {

    const [showMore, setShowMore] = useState(false)

    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <HomeSection/>
        </div>
    )
}

export default Sidebar
