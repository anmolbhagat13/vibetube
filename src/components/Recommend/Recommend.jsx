import React, { useState } from 'react'
import './Recommend.css'
import thumbnail2 from '../../assets/thumbnail2.png'
import tick from '../../assets/tick.svg'
import play from '../../assets/play.svg'
import options from '../../assets/options.svg'
import { useSearchParams } from 'react-router-dom'

const videos = [
    {
        name: "All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode",
        channel: "Marvel HQ",
        views: "16M",
        time: "1y ago"
    },
    {
        name: "All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode",
        channel: "Marvel HQ",
        views: "16M",
        time: "1y ago"
    },
    {
        name: "All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode",
        channel: "Marvel HQ",
        views: "16M",
        time: "1y ago"
    },
    {
        name: "All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode",
        channel: "Marvel HQ",
        views: "16M",
        time: "1y ago"
    },
    {
        name: "All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode",
        channel: "Marvel HQ",
        views: "16M",
        time: "1y ago"
    },
    {
        name: "All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode",
        channel: "Marvel HQ",
        views: "16M",
        time: "1y ago"
    },
    {
        name: "All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode",
        channel: "Marvel HQ",
        views: "16M",
        time: "1y ago"
    },
    {
        name: "All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode",
        channel: "Marvel HQ",
        views: "16M",
        time: "1y ago"
    },
    {
        name: "All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode",
        channel: "Marvel HQ",
        views: "16M",
        time: "1y ago"
    },
];

const Recommend = () => {
    return (
        <div className="vid-card-layout">
            <div className="vid-recommend">
                <div className="all-btn btn">
                    <button>All</button>
                </div>
                <div className="btn">
                    <button>From GreatStack</button>
                </div>
                <div className="btn">
                    <button>Web Development</button>
                </div>
            </div>
            {
                videos.map((video) => (
                    <div className="vid-card">
                        <div className="vc-left">
                            <img src={thumbnail2} alt="" />
                        </div>
                        <div className="vc-right">
                            <span className='vid-name'>{video.name}</span>
                            <div className="vid-info">
                                <div className="vc-channel-name">
                                    <span>{video.channel}</span>
                                    <img src={tick} alt="" />
                                </div>
                                <div className="vid-details">
                                    <img src={play} alt="" />
                                    <span className='vid-views'>{video.views}</span>
                                    <span className='vid-p-time'>{video.time}</span>
                                </div>
                                <div className='options'>
                                    <img src={options} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Recommend
