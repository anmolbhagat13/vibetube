import React, { useState } from 'react'
import './Recommend.css'
import thumbnail2 from '../../assets/thumbnail2.png'
import tick from '../../assets/tick.svg'
import play from '../../assets/play.svg'
import options from '../../assets/options.svg'
import { useSearchParams } from 'react-router-dom'
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
            <div className="vid-card">
                <div className="vc-left">
                    <img src={thumbnail2} alt="" />
                </div>
                <div className="vc-right">
                    <span className='vid-name'>All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode</span>
                    <div className="vid-info">
                        <div className="channel-name">
                            <span>Marvel HQ</span>
                            <img src={tick} alt="" />
                        </div>
                        <div className="vid-details">
                            <img src={play} alt="" />
                            <span className='vid-views'>16M</span>
                            <span className='vid-p-time'>1y ago</span>
                        </div>
                        <div className='options'>
                            <img src={options} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="vid-card">
                <div className="vc-left">
                    <img src={thumbnail2} alt="" />
                </div>
                <div className="vc-right">
                    <span className='vid-name'>All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode</span>
                    <div className="vid-info">
                        <div className="channel-name">
                            <span>Marvel HQ</span>
                            <img src={tick} alt="" />
                        </div>
                        <div className="vid-details">
                            <img src={play} alt="" />
                            <span className='vid-views'>16M</span>
                            <span className='vid-p-time'>1y ago</span>
                        </div>
                        <div className='options'>
                            <img src={options} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="vid-card">
                <div className="vc-left">
                    <img src={thumbnail2} alt="" />
                </div>
                <div className="vc-right">
                    <span className='vid-name'>All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode</span>
                    <div className="vid-info">
                        <div className="channel-name">
                            <span>Marvel HQ</span>
                            <img src={tick} alt="" />
                        </div>
                        <div className="vid-details">
                            <img src={play} alt="" />
                            <span className='vid-views'>16M</span>
                            <span className='vid-p-time'>1y ago</span>
                        </div>
                        <div className='options'>
                            <img src={options} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="vid-card">
                <div className="vc-left">
                    <img src={thumbnail2} alt="" />
                </div>
                <div className="vc-right">
                    <span className='vid-name'>All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode</span>
                    <div className="vid-info">
                        <div className="channel-name">
                            <span>Marvel HQ</span>
                            <img src={tick} alt="" />
                        </div>
                        <div className="vid-details">
                            <img src={play} alt="" />
                            <span className='vid-views'>16M</span>
                            <span className='vid-p-time'>1y ago</span>
                        </div>
                        <div className='options'>
                            <img src={options} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="vid-card">
                <div className="vc-left">
                    <img src={thumbnail2} alt="" />
                </div>
                <div className="vc-right">
                    <span className='vid-name'>All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode</span>
                    <div className="vid-info">
                        <div className="channel-name">
                            <span>Marvel HQ</span>
                            <img src={tick} alt="" />
                        </div>
                        <div className="vid-details">
                            <img src={play} alt="" />
                            <span className='vid-views'>16M</span>
                            <span className='vid-p-time'>1y ago</span>
                        </div>
                        <div className='options'>
                            <img src={options} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="vid-card">
                <div className="vc-left">
                    <img src={thumbnail2} alt="" />
                </div>
                <div className="vc-right">
                    <span className='vid-name'>All Father's Day | Marvel's Avengers Assemble S1 E20 | Full Episode</span>
                    <div className="vid-info">
                        <div className="channel-name">
                            <span>Marvel HQ</span>
                            <img src={tick} alt="" />
                        </div>
                        <div className="vid-details">
                            <img src={play} alt="" />
                            <span className='vid-views'>16M</span>
                            <span className='vid-p-time'>1y ago</span>
                        </div>
                        <div className='options'>
                            <img src={options} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommend
