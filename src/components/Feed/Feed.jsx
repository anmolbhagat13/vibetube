import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import channel from '../../assets/channel.jpg'
import options from '../../assets/options.svg'
const Feed = () => {
    return (
        <div className='feed'>
            <Link to={`video/20/4521`} className="card">
                <div className="video">
                    <img src={thumbnail1} alt="" />
                </div>
                <div className="video-info">
                    <div className="video-info-left">
                        <img src={channel} alt="" />
                    </div>
                    <div className="video-info-right">
                        <h2>Best channel to learn coding that help you to be a webdeveloper</h2>
                        <h3>Greatstack</h3>
                        <p>15k views &bull; 2 days ago</p>
                    </div>
                    <img className='options' src={options} alt="" />
                </div>
            </Link>
            <div className="card">
                <div className="video">
                    <img src={thumbnail2} alt="" />
                </div>
                <div className="video-info">
                    <div className="video-info-left">
                        <img src={channel} alt="" />
                    </div>
                    <div className="video-info-right">
                        <h2>Best channel to learn coding that help you to be a webdeveloper</h2>
                        <h3>Greatstack</h3>
                        <p>15k views &bull; 2 days ago</p>
                    </div>
                    <img className='options' src={options} alt="" />
                </div>
            </div>
            <div className="card">
                <div className="video">
                    <img src={thumbnail3} alt="" />
                </div>
                <div className="video-info">
                    <div className="video-info-left">
                        <img src={channel} alt="" />
                    </div>
                    <div className="video-info-right">
                        <h2>Best channel to learn coding that help you to be a webdeveloper</h2>
                        <h3>Greatstack</h3>
                        <p>15k views &bull; 2 days ago</p>
                    </div>
                    <img className='options' src={options} alt="" />
                </div>
            </div>
            <div className="card">
                <div className="video">
                    <img src={thumbnail4} alt="" />
                </div>
                <div className="video-info">
                    <div className="video-info-left">
                        <img src={channel} alt="" />
                    </div>
                    <div className="video-info-right">
                        <h2>Best channel to learn coding that help you to be a webdeveloper</h2>
                        <h3>Greatstack</h3>
                        <p>15k views &bull; 2 days ago</p>
                    </div>
                    <img className='options' src={options} alt="" />
                </div>
            </div>
            <div className="card">
                <div className="video">
                    <img src={thumbnail5} alt="" />
                </div>
                <div className="video-info">
                    <div className="video-info-left">
                        <img src={channel} alt="" />
                    </div>
                    <div className="video-info-right">
                        <h2>Best channel to learn coding that help you to be a webdeveloper</h2>
                        <h3>Greatstack</h3>
                        <p>15k views &bull; 2 days ago</p>
                    </div>
                    <img className='options' src={options} alt="" />
                </div>
            </div>
            <div className="card">
                <div className="video">
                    <img src={thumbnail6} alt="" />
                </div>
                <div className="video-info">
                    <div className="video-info-left">
                        <img src={channel} alt="" />
                    </div>
                    <div className="video-info-right">
                        <h2>Best channel to learn coding that help you to be a webdeveloper</h2>
                        <h3>Greatstack</h3>
                        <p>15k views &bull; 2 days ago</p>
                    </div>
                    <img className='options' src={options} alt="" />
                </div>
            </div>
            <div className="card">
                <div className="video">
                    <img src={thumbnail7} alt="" />
                </div>
                <div className="video-info">
                    <div className="video-info-left">
                        <img src={channel} alt="" />
                    </div>
                    <div className="video-info-right">
                        <h2>Best channel to learn coding that help you to be a webdeveloper</h2>
                        <h3>Greatstack</h3>
                        <p>15k views &bull; 2 days ago</p>
                    </div>
                    <img className='options' src={options} alt="" />
                </div>
            </div>
            <div className="card">
                <div className="video">
                    <img src={thumbnail8} alt="" />
                </div>
                <div className="video-info">
                    <div className="video-info-left">
                        <img src={channel} alt="" />
                    </div>
                    <div className="video-info-right">
                        <h2>Best channel to learn coding that help you to be a webdeveloper</h2>
                        <h3>Greatstack</h3>
                        <p>15k views &bull; 2 days ago</p>
                    </div>
                    <img className='options' src={options} alt="" />
                </div>
            </div>
        </div >
    )
}

export default Feed
