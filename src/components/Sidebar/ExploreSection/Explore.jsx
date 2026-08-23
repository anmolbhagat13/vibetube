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

const Explore = ({showMore,setShowMore, category,setCategory}) => {
    return (
        <div className="explore big">
            <span>Explore</span>
            <div className={`side-link ${category===0?"active":""}`}onClick={()=>setCategory(0)}>
                <img src={shopping} alt="" /> <p>Shopping</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="" /> <p>Music</p>
            </div>
            <div className={`side-link ${category===30?"active":""}`} onClick={()=>setCategory(30)}>
                <img src={moviestv} alt="" /> <p>Movies & TV</p>
            </div>
            {!showMore && (
                <div onClick={() => { setShowMore(true) }} className="side-link">
                    <img src={showmore} alt="" /> <p>Show more</p>
                </div>
            )}
            {showMore && (
                <>
                    <div className="side-link" onClick={()=>setCategory(0)}>
                        <img src={live} alt="" /> <p>Live</p>
                    </div>
                    <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                        <img src={gaming} alt="" /> <p>Gaming</p>
                    </div>
                    <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                        <img src={news} alt="" /> <p>News</p>
                    </div>
                    <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                        <img src={sports} alt="" /> <p>Sports</p>
                    </div>
                    <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <img src={courses} alt="" /> <p>Courses</p>
                    </div>
                    <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <img src={fashionbeauty} alt="" /> <p>Fashion & Beauty</p>
                    </div>
                    <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <img src={podcasts} alt="" /> <p>Podcasts</p>
                    </div>
                    <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <img src={playables} alt="" /> <p>Playables</p>
                    </div>
                    <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                        <img src={memberships} alt="" /> <p>Memberships</p>
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
