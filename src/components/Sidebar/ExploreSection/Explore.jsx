import React from 'react'
import './Explore.css'
import showless from '../../../assets/vt-showless.svg'
import showmore from '../../../assets/vt-showmore.svg'
import shopping from '../../../assets/vt-shopping.png'
import music from '../../../assets/vt-music.png'
import moviestv from '../../../assets/vt-moviestv.png'
import live from '../../../assets/vt-live.png'
import gaming from '../../../assets/vt-gaming.png'
import news from '../../../assets/vt-news.png'
import sports from '../../../assets/vt-sports.png'
import courses from '../../../assets/vt-courses.svg'
import fashionbeauty from '../../../assets/vt-fashion-beauty.png'
import podcasts from '../../../assets/vt-podcasts.png'
import playables from '../../../assets/vt-playables.png'
import memberships from '../../../assets/vt-memberships.png'

const Explore = ({ showMore, setShowMore, category, setCategory }) => {
    return (
        <div className="explore big">
            <span>Explore</span>

            <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
                <img src={music} alt="" /> <p>Music</p>
            </div>
            <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
                <img src={gaming} alt="" /> <p>Gaming</p>
            </div>
            <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
                <img src={sports} alt="" /> <p>Sports</p>
            </div>
            <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
                <img src={news} alt="" /> <p>News</p>
            </div>
            {!showMore && (
                <div onClick={() => { setShowMore(true) }} className="side-link">
                    <img src={showmore} alt="" /> <p>Show more</p>
                </div>
            )}
            {showMore && (
                <>
                    <div className={`side-link ${category === 23 ? "active" : ""}`} onClick={() => setCategory(23)}>
                        <img src={live} alt="" /> <p>Comedy</p>
                    </div>
                    <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
                        <img src={moviestv} alt="" /> <p>Entertainment</p>
                    </div>
                    <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
                        <img src={shopping} alt="" /> <p>Science & Technology</p>
                    </div>
                    <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
                        <img src={playables} alt="" /> <p>Autos & Vehicles</p>
                    </div>
                    <div className={`side-link ${category === 26 ? "active" : ""}`} onClick={() => setCategory(26)}>
                        <img src={fashionbeauty} alt="" /> <p>How-to & Style</p>
                    </div>
                    <div className={`side-link ${category === 1 ? "active" : ""}`} onClick={() => setCategory(1)}>
                        <img src={podcasts} alt="" /> <p>Film & Animation</p>
                    </div>
                    <div className={`side-link ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
                        <img src={courses} alt="" /> <p>People & Blogs</p>
                    </div>
                    <div onClick={() => { setShowMore(false) }} className="side-link">
                        <img src={showless} alt="" /> <p>Show less</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Explore
