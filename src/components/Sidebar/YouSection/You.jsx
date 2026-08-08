import React from 'react'
import './You.css'
import { ChevronRight } from 'lucide-react'
import yrchannel from '../../../assets/vt-yrchannel.png'
import history from '../../../assets/vt-history.svg'
import playlist from '../../../assets/vt-playlist.png'
import clock from '../../../assets/vt-clock.svg'
import liked from '../../../assets/vt-liked.svg'
import yrvideos from '../../../assets/vt-yrvideos.png'
import downloads from '../../../assets/vt-downloads.svg'
import showmore from '../../../assets/vt-showmore.svg'
import courses from '../../../assets/vt-courses.svg'
import showless from '../../../assets/vt-showless.svg'

const You = ({showMore, setShowMore}) => {
    return (
        <div className="you">
            <span>You <ChevronRight size={16} /></span>
            <div className="side-link">
                <img src={yrchannel} alt="" /> <p>Your channel</p>
            </div>
            <div className="side-link">
                <img src={history} alt="" /> <p>History</p>
            </div>
            <div className="side-link">
                <img src={playlist} alt="" /> <p>Playlists</p>
            </div>
            <div className="side-link">
                <img src={clock} alt="" /> <p>Watch later</p>
            </div>
            <div className="side-link">
                <img src={liked} alt="" /> <p>Liked videos</p>
            </div>
            <div className="side-link">
                <img src={yrvideos} alt="" /> <p>Your videos</p>
            </div>
            <div className="side-link">
                <img src={downloads} alt="" /> <p>Downloads</p>
            </div>
            {!showMore && (
                <div onClick={() => { setShowMore(true) }} className="side-link">
                    <img src={showmore} alt="" /> <p>Show more</p>
                </div>
            )}
            {showMore && (
                <>
                    <div className="side-link">
                        <img src={courses} alt="" /> <p>Courses</p>
                    </div>
                    <div onClick={() => { setShowMore(false) }} className="side-link">
                        <img src={showless} alt="" /> <p>Show less</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default You
