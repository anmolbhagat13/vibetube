import React, { useState } from 'react'
import './PlayVideo.css'
import video from '../../assets/videoplayback.mp4'
import channel from '../../assets/channel.jpg'
import tick from '../../assets/tick.svg'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import ask from '../../assets/ask.png'
import save from '../../assets/save.svg'
import threedots from '../../assets/threedots.png'
import sort from '../../assets/sort.svg'
import profile from '../../assets/profile.png'
import edit from '../../assets/edit.svg'
import emoji from '../../assets/emoji.png'
const PlayVideo = () => {

    const [cmt, setCmt] = useState(false)

    return (
        <div className='play-video'>
            <video src={video} controls autoPlay muted></video>
            <h3>Best Youtube Channel To Learn Web Development</h3>
            <div className="play-video-info">
                <div className="channel-info">
                    <div className="left-side">
                        <div className="logo">
                            <img src={channel} alt="" />
                        </div>
                        <div className="channel">
                            <p className='channel-name'>GreatStack <img src={tick} alt="" /></p>
                            <p className='channel-subs'>1.23M subscribers</p>
                        </div>
                        <button className='btn join-btn'>Join</button>
                        <button className='btn subs-btn'>Subscribe</button>
                    </div>
                    <div className="right-side">
                        <span className='like rs'><img src={like} alt="" />125</span>
                        <span className='dislike rs'><img src={dislike} alt="" /></span>
                        <span className='rs'><img src={share} alt="" />Share</span>
                        <span className='rs'><img src={ask} alt="" />Ask</span>
                        <span className='rs'><img src={save} alt="" />Save</span>
                        <span className='rs threedots'><img src={threedots} alt="" /></span>
                    </div>
                </div>
            </div>
            <div className="channel-expand-info">
                <div className='ce-video-meta'>
                    <p>1,525 views</p>
                    <p>2 days ago</p>
                </div>
                <div className="ce-vid-description">
                    <p>Channel that makes learning easy</p>
                    <p>Subscribe GreatStack to watch more tutorials on web development</p>
                </div>
            </div>
            <div className="comments">
                <div className="comment-head">
                    <h3><span>318</span> Comments</h3>
                    <span className='sort'><img src={sort} alt="" />Sort by</span>
                </div>
                {!cmt && (
                    <div className="cmt-profile">
                        <span className='cmt-profile-pic'><img src={profile} alt="" /></span>
                        <input onClick={() => { setCmt(true) }} type="text" placeholder='Add a comment...' />
                    </div>
                )}
                {cmt && (
                    <div className="cmt-profile-clicked">
                        <p className='cmt-as'>Commenting as</p>
                        <div className="cmt-profile-box">
                            <img className='cmt-profile-box-img' src={profile} alt="" />
                            <div className="cmt-profile-box-info">
                                <p>User Name</p>
                                <p>@UserName-b3y</p>
                            </div>
                            <div className='cmt-edit'>
                                <img src={edit} alt="" />
                            </div>
                        </div>
                        <div className="cmt-input">
                            <input type="text" />
                        </div>
                        <div className="cmt-footer">
                            <div className="emoji">
                                <img src={emoji} alt="" />
                            </div>
                            <div className="btns">
                                <div className="cancel-btn">
                                    <button onClick={() => { setCmt(false) }} >Cancel</button>
                                </div>
                                <div className="comment-btn">
                                    <button>Comment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PlayVideo
